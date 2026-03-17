import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { longFormContent } from "@/lib/long-form-content";
import { HomeStructuredData } from "@/components/HomeStructuredData";
import { HomeFAQSchema, FAQ_ITEMS } from "@/components/HomeFAQSchema";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

export const metadata = createSocialMetadata({
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  path: "/",
  keywords: [
    "출장마사지",
    "출장안마",
    "출장스웨디시",
    "출장 마사지",
    "출장 안마",
    "출장 스웨디시",
    "홈케어 마사지",
    "방문 마사지",
  ],
});

export default function Home() {
  const { nap, metaTitle } = siteConfig;
  const fullAddress = [
    nap.address.streetAddress,
    nap.address.addressLocality,
    nap.address.addressRegion,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <HomeStructuredData />
      <HomeFAQSchema />
      <article>
        <section id="intro" className="hero" aria-labelledby="hero-heading">
          <div className="hero__bg-slide hero__bg-slide--1 hero__bg-slide--img" aria-hidden="true">
            <Image
              src="/hero/출장마사지-1.webp"
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={55}
              sizes="(max-width: 768px) 430px, (max-width: 1200px) 100vw, 1200px"
              decoding="async"
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
                {metaTitle}
              </h1>
              <p className="hero__lead">
                고객이 계신 곳으로 찾아가는 프리미엄 마사지 서비스
              </p>
              <p className="hero__sub">
                출장마사지, 출장안마, 출장스웨디시 — 집·호텔·오피스로 방문해 드립니다
              </p>
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
            출장마사지 · 출장안마 · 출장스웨디시 서비스
          </h2>
          <div className="prose">
            {longFormContent.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <h3 className="prose__subtitle">출장마사지</h3>
            {longFormContent.serviceMassage.map((paragraph, i) => (
              <p key={`massage-${i}`}>{paragraph}</p>
            ))}
            <h3 className="prose__subtitle">출장안마</h3>
            {longFormContent.serviceAnma.map((paragraph, i) => (
              <p key={`anma-${i}`}>{paragraph}</p>
            ))}
            <h3 className="prose__subtitle">출장스웨디시</h3>
            {longFormContent.serviceSwedish.map((paragraph, i) => (
              <p key={`swedish-${i}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="compare" className="section section--white" aria-labelledby="compare-heading">
          <div className="content-block">
            <h2 id="compare-heading" className="section-title">
              출장마사지 vs 출장안마 vs 출장스웨디시
            </h2>
            <div className="prose">
              <p>
                세 가지 서비스의 차이를 이해하시면 본인에게 맞는 코스를 선택하실 수 있습니다.
              </p>
              {longFormContent.compare.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
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

        <section id="benefits" className="content-block" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="section-title">
            출장마사지·출장안마·출장스웨디시를 선택하는 이유
          </h2>
          <div className="prose">
            {longFormContent.benefits.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="who" className="section section--white" aria-labelledby="who-heading">
          <div className="content-block">
            <h2 id="who-heading" className="section-title">
              어떤 분에게 적합한가요?
            </h2>
            <div className="prose">
              <p>
                출장마사지, 출장안마, 출장스웨디시는 각각 다른 특징이 있어, 상황과 선호에 맞는 서비스를 선택하시면 만족도가 높아집니다.
              </p>
              {longFormContent.whoSuitable.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="scenario" className="content-block" aria-labelledby="scenario-heading">
          <h2 id="scenario-heading" className="section-title">
            이용 시나리오
          </h2>
          <div className="prose">
            <p>
              출장마사지, 출장안마, 출장스웨디시는 다양한 상황에서 활용됩니다. 아래는 실제 이용 사례를 바탕으로 한 예시입니다.
            </p>
            {longFormContent.scenarios.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="effects" className="section section--white" aria-labelledby="effects-heading">
          <div className="content-block">
            <h2 id="effects-heading" className="section-title">
              마사지 효과와 주의사항
            </h2>
            <div className="prose">
              <p>
                출장마사지, 출장안마, 출장스웨디시를 받으시면 어떤 효과를 기대할 수 있고, 주의할 점은 무엇인지 안내합니다.
              </p>
              {longFormContent.effects.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="howto" className="content-block" aria-labelledby="howto-heading">
          <h2 id="howto-heading" className="section-title">
            이용 방법
          </h2>
          <p className="prose__lead">
            출장마사지·출장안마·출장스웨디시 예약은 전화 또는 카카오톡으로 받고 있습니다.
          </p>
          <ol className="prose__list">
            <li>전화 또는 카카오톡으로 <strong>예약·문의</strong></li>
            <li>희망 일시, 장소, 원하는 코스(전신·부분·출장마사지·출장안마·출장스웨디시 등) 안내</li>
            <li>예약 확정 후 방문 일시·준비 사항 안내</li>
            <li>테라피스트 방문 후 이용</li>
          </ol>
          <div className="prose">
            {longFormContent.howToUse.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="tips" className="section section--alt" aria-labelledby="tips-heading">
          <div className="content-block">
            <h2 id="tips-heading" className="section-title">
              이용 준비 및 주의사항
            </h2>
            <div className="prose">
              <p>
                출장마사지, 출장안마, 출장스웨디시를 편하고 효과적으로 이용하시려면 아래 내용을 참고해 주세요.
              </p>
              {longFormContent.tips.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="content-block" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="section-title">
            자주 묻는 질문
          </h2>
          <p className="prose__lead">
            출장마사지·출장안마·출장스웨디시 관련 자주 묻는 질문을 정리했습니다.
          </p>
          <ul className="faq-list" role="list">
            {FAQ_ITEMS.map((item, i) => (
              <li key={i} className="faq-list__item">
                <h3 className="faq-list__q">{item.question}</h3>
                <p className="faq-list__a">{item.answer}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section section--contact" aria-labelledby="contact-heading">
          <div className="content-block">
            <h2 id="contact-heading" className="section-title">
              예약·문의
            </h2>
            <p className="prose__lead">
              출장마사지, 출장안마, 출장스웨디시 예약은 아래 연락처로 받고 있습니다.
            </p>
            <div className="contact-cta">
              {nap.telephone && (
                <a href={`tel:${nap.telephone.replace(/\s/g, "")}`} className="contact-cta__tel">
                  {nap.telephone}
                </a>
              )}
              {fullAddress && (
                <address className="contact-cta__address">{fullAddress}</address>
              )}
            </div>
            <CtaButtonsFromConfig />
            {!nap.telephone && !fullAddress && (
              <p className="contact-cta__empty">연락처 정보는 준비 중입니다.</p>
            )}
          </div>
        </section>
      </article>
    </>
  );
}
