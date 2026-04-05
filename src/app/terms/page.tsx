import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createSocialMetadata({
  title: "이용약관",
  description:
    `${siteConfig.companyName} 웹사이트 이용 조건, 예약·취소, 면책 사항을 안내합니다.`,
  path: "/terms",
  keywords: ["이용약관", "서비스약관", siteConfig.companyName],
});

export default function TermsPage() {
  const { companyName } = siteConfig;

  return (
    <article className="page-article legal-page">
      <div className="content-block">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">이용약관</span>
        </nav>

        <h1 className="page-article__title">이용약관</h1>
        <p className="page-article__lead">
          본 약관은 {companyName} 웹사이트 및 예약·상담 채널 이용과 관련한 기본 조건을 정합니다.
        </p>

        <div className="prose legal-page__body">
          <h2 className="page-article__section-title">1. 서비스의 성격</h2>
          <p>
            본 사이트는 출장 마사지·안마·스웨디시 등 웰니스 목적의 방문 서비스 예약·안내를 위한
            정보 제공 목적으로 운영됩니다. 사이트에서 안내하는 내용은 일반적인 이용 기준이며, 의료
            행위·진단·치료를 목적으로 하지 않습니다.
          </p>

          <h2 className="page-article__section-title">2. 예약 및 이용</h2>
          <p>
            예약은 전화·메신저 등 운영자가 안내하는 채널을 통해 이루어집니다. 희망 일시·장소·코스는
            상담 시 확정되며, 현장 상황에 따라 일부 조정될 수 있습니다.
          </p>

          <h2 className="page-article__section-title">3. 취소·변경</h2>
          <p>
            일정 취소·변경은 가능한 한 빨리 연락 주시기 바랍니다. 무단 노쇼·반복적인 당일 취소는
            이후 예약 제한 등 제재가 있을 수 있습니다. 구체적인 취소 정책은 상담 시 안내됩니다.
          </p>

          <h2 className="page-article__section-title">4. 면책</h2>
          <p>
            천재지변, 교통·통신 장애, 이용자가 제공한 정보의 오류 등 운영자의 합리적 통제 범위를
            벗어난 사유로 서비스 제공이 어려운 경우 책임이 제한될 수 있습니다. 마사지 시술에 따른
            개인차·건강 상태는 이용자가 판단·고지할 책임이 있습니다.
          </p>

          <h2 className="page-article__section-title">5. 저작권</h2>
          <p>
            사이트의 텍스트·이미지·디자인 등은 운영자 또는 정당한 권리자에게 귀속됩니다. 무단 복제·
            배포를 금지합니다.
          </p>

          <h2 className="page-article__section-title">6. 약관 변경</h2>
          <p>
            약관은 관련 법령 및 서비스 변경에 따라 개정될 수 있으며, 개정 시 사이트에 게시합니다.
          </p>

          <p className="legal-page__notice">
            본 문서는 일반적인 안내용 초안입니다. 실제 운영·분쟁 대응에 맞게 법무 검토 후
            보완하시기 바랍니다.
          </p>
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
