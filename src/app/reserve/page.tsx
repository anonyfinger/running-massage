import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createSocialMetadata({
  title: "영등포 출장마사지 예약문의 | 위치·장소·시간 3단계 확인",
  description:
    "영등포 출장마사지 예약문의 페이지입니다. 여의도·영등포역·문래·당산·신길·대림 기준으로 위치·장소·시간대 3가지를 먼저 정리하면 가능 여부 확인이 빨라집니다.",
  path: "/reserve",
  keywords: ["영등포 출장마사지 예약", "영등포 출장마사지 문의", "영등포출장안마", "출장마사지 예약문의"],
});

export default function ReservePage() {
  const tel = siteConfig.nap.telephone.replace(/\s/g, "");

  return (
    <article className="page-article">
      <div className="content-block">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">예약문의</span>
        </nav>

        <h1 className="page-article__title">영등포 출장마사지 예약문의</h1>
        <p className="page-article__lead">
          여의도·영등포역·문래·당산·신길·대림 생활권 기준으로 예약 전에 위치, 장소, 시간대만 먼저 정리해 주세요.
          가능 여부 확인과 안내 속도가 크게 빨라집니다.
        </p>

        <section className="page-article__section">
          <h2 className="page-article__section-title">빠른 확인 3단계</h2>
          <ul className="page-article__list">
            <li>지역: 여의도·영등포역·문래·당산·신길·대림 중 가까운 위치</li>
            <li>장소: 집 / 호텔 / 오피스</li>
            <li>희망 시간: 지금 / 오늘 / 내일과 대략 시간대</li>
          </ul>
        </section>

        <section className="page-article__section">
          <h2 className="page-article__section-title">문의 채널</h2>
          <p className="prose">
            아래 채널 중 편한 방법으로 바로 문의해 주세요. 현재 상태(목·어깨, 허리, 하체 등)를 한 줄로
            함께 알려주시면 코스 안내가 더 정확해집니다.
          </p>
          <p className="prose">
            <a href={`tel:${tel}`} className="prose__subtitle-link">전화 문의: {siteConfig.nap.telephone}</a>
            <br />
            <a href={`sms:${tel}`} className="prose__subtitle-link">문자 문의: {siteConfig.nap.telephone}</a>
          </p>
          <p className="prose">안내 메시지 예시: &quot;문래 / 집 / 오늘 21시 / 목·어깨 집중&quot;</p>
        </section>

        <section className="page-article__section">
          <h2 className="page-article__section-title">취소·변경 기준</h2>
          <ul className="page-article__list">
            <li>예약 시간 2시간 전까지: 변경/취소 가능</li>
            <li>2시간 이내 변경: 가능한 범위에서 시간 재조정 우선</li>
            <li>반복적인 당일 취소·노쇼: 이후 예약 제한 가능</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
