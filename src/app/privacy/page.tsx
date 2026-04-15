import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createSocialMetadata({
  title: "개인정보처리방침",
  description:
    `${siteConfig.companyName} 웹사이트에서 수집·이용하는 개인정보 항목, 보관, 문의 방법을 안내합니다.`,
  path: "/privacy",
  keywords: ["개인정보처리방침", "개인정보", siteConfig.companyName],
});

export default function PrivacyPage() {
  const { companyName, nap } = siteConfig;
  const contact =
    nap.telephone
      ? `전화 ${nap.telephone}`
      : "사이트에 표시된 예약·문의 채널";

  return (
    <article className="page-article legal-page">
      <div className="content-block">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">개인정보처리방침</span>
        </nav>

        <h1 className="page-article__title">개인정보처리방침</h1>
        <p className="page-article__lead">
          {companyName}(이하 &quot;운영자&quot;)는 이용자의 개인정보를 중요하게 여기며, 관련 법령을 준수합니다.
        </p>

        <div className="prose legal-page__body">
          <h2 className="page-article__section-title">1. 수집 항목</h2>
          <p>
            예약·상담 과정에서 이용자가 자발적으로 제공하는 연락처(전화번호 등), 희망 일시·장소에 관한
            정보, 문의 내용 등이 수집될 수 있습니다. 웹사이트 방문 시 쿠키·접속 로그 등이 자동으로
            생성·수집될 수 있습니다.
          </p>

          <h2 className="page-article__section-title">2. 이용 목적</h2>
          <p>
            예약 접수 및 상담, 서비스 안내, 민원 처리, 부정 이용 방지, 통계·서비스 개선(익명·집계
            형태)에 이용합니다.
          </p>

          <h2 className="page-article__section-title">3. 보관 및 파기</h2>
          <p>
            수집 목적이 달성되거나 이용자가 삭제를 요청한 경우 지체 없이 파기합니다. 관련 법령에 따라
            보관이 필요한 경우 해당 기간 동안만 보관합니다.
          </p>

          <h2 className="page-article__section-title">4. 제3자 제공</h2>
          <p>
            이용자 동의가 있거나 법령에 따른 경우를 제외하고 제3자에게 제공하지 않습니다. 현재 예약
            상담 운영에서 개인정보 처리 위탁은 하지 않습니다. 향후 위탁이 필요한 경우 수탁자, 위탁
            업무, 보관 기간을 본 방침에 즉시 반영합니다.
          </p>

          <h2 className="page-article__section-title">5. 이용자의 권리</h2>
          <p>
            이용자는 언제든지 개인정보 열람·정정·삭제·처리 정지를 요청할 수 있으며, {contact}로
            요청하실 수 있습니다.
          </p>

          <h2 className="page-article__section-title">6. 안전성 확보</h2>
          <p>
            개인정보 보호를 위해 관리적·기술적 조치를 취합니다. 다만 인터넷상 전송은 100% 안전하지
            않을 수 있음을 알려 드립니다.
          </p>

          <h2 className="page-article__section-title">7. 고지의 변경</h2>
          <p>
            본 방침은 법령·서비스 변경에 따라 수정될 수 있으며, 중요한 변경 시 사이트를 통해
            안내합니다.
          </p>

          <h2 className="page-article__section-title">8. 시행일</h2>
          <p>본 방침은 2026년 4월 13일부터 적용됩니다.</p>

          <h2 className="page-article__section-title">9. 관련 페이지</h2>
          <ul className="page-article__list">
            <li><Link href="/yeongdeungpo-chuljangmassage" className="prose__subtitle-link">영등포 출장마사지</Link></li>
            <li><Link href="/reserve" className="prose__subtitle-link">출장마사지 예약문의</Link></li>
            <li><Link href="/regions/common/reservation-guide" className="prose__subtitle-link">출장마사지 예약 가이드</Link></li>
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
