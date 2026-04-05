import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createSocialMetadata({
  title: "회사 소개 · 운영 안내",
  description:
    `${siteConfig.companyName}는 집·호텔·오피스로 방문하는 출장 마사지·안마·스웨디시 예약 안내를 제공합니다. 서비스 성격·문의 방법을 안내합니다.`,
  path: "/about",
  keywords: ["출장달리기", "출장마사지", "회사소개", siteConfig.companyName],
});

export default function AboutPage() {
  const { companyName, nap } = siteConfig;

  return (
    <article className="page-article about-page">
      <div className="content-block">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">회사 소개</span>
        </nav>

        <h1 className="page-article__title">회사 소개 · 운영 안내</h1>
        <p className="page-article__lead">
          {companyName}는 방문 홈케어 마사지(출장마사지·출장안마·출장스웨디시) 예약·이용 안내를 제공하는 브랜드입니다.
        </p>

        <div className="prose">
          <h2 className="page-article__section-title">서비스 안내</h2>
          <p>
            본 사이트는 예약·상담을 연결하고, 코스·지역·이용 방법에 관한 정보를 제공합니다. 시술은 웰니스·휴식 목적의
            일반 마사지에 해당하며, 의료 행위·진단·치료를 목적으로 하지 않습니다. 증상이 심하거나 지속되면 의료 기관
            진료를 권장합니다.
          </p>

          <h2 className="page-article__section-title">문의·예약</h2>
          <p>
            예약 및 문의는 사이트에 표시된 전화·메신저 채널을 이용해 주세요.
            {nap.telephone && (
              <>
                {" "}
                대표 연락처:{" "}
                <a href={`tel:${nap.telephone.replace(/\s/g, "")}`}>{nap.telephone}</a>
              </>
            )}
          </p>

          <h2 className="page-article__section-title">관련 페이지</h2>
          <ul className="page-article__list">
            <li>
              <Link href="/regions" className="prose__subtitle-link">
                지역별 안내
              </Link>
            </li>
            <li>
              <Link href="/blog" className="prose__subtitle-link">
                이용 가이드·블로그
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="prose__subtitle-link">
                개인정보처리방침
              </Link>
            </li>
            <li>
              <Link href="/terms" className="prose__subtitle-link">
                이용약관
              </Link>
            </li>
          </ul>
        </div>

        <nav className="article-detail__back" aria-label="상위로">
          <Link href="/" className="page-article__back">
            ← 홈으로
          </Link>
        </nav>
      </div>
    </article>
  );
}
