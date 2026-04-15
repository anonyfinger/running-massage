import Link from "next/link";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";

export const metadata = createSocialMetadata({
  title: "영등포 출장마사지 | 여의도·당산·문래 24시 방문 케어 안내",
  description:
    "영등포 출장마사지 이용 전 확인할 서비스 범위, 예약 절차, 운영 시간, 지역별 방문 안내를 한 페이지에 정리했습니다. 여의도·당산·문래·신길 생활권 예약 정보를 확인해보세요.",
  path: "/yeongdeungpo-chuljangmassage",
  keywords: [
    "영등포 출장마사지",
    "여의도 출장마사지",
    "당산 출장마사지",
    "문래 출장마사지",
    "영등포출장안마",
    "영등포출장홈타이",
  ],
});

const FAQ_ITEMS = [
  {
    q: "여의도 오피스텔도 가능한가요?",
    a: "가능 여부는 출입 동선, 건물 규정, 시간대에 따라 달라집니다. 건물명과 출입 방식, 희망 시간 범위를 먼저 알려주시면 가능한 범위를 빠르게 확인해 드립니다.",
  },
  {
    q: "영등포역 인근 숙소도 예약되나요?",
    a: "호텔이나 숙소 이용은 가능합니다. 다만 로비 출입 규정, 객실 이동 동선, 체크인 상태에 따라 안내 방식이 달라질 수 있어 지점명과 방문 시간을 함께 전달해 주시는 편이 정확합니다.",
  },
  {
    q: "당일 예약도 가능한가요?",
    a: "당일 예약도 가능하지만 시간대와 이동 동선에 따라 가능 범위가 달라집니다. 특히 퇴근 시간대나 심야 시간은 문의가 몰릴 수 있어, 가능한 시간 범위를 넓게 주시면 안내가 더 빨라집니다.",
  },
  {
    q: "늦은 시간 이용도 가능한가요?",
    a: "24시간 문의는 가능하며 실제 방문 가능 여부는 심야 시간대 운영 범위 안에서 안내됩니다. 늦은 시간일수록 위치와 진입 동선을 먼저 정리해 주시면 불필요한 대기 시간을 줄일 수 있습니다.",
  },
  {
    q: "예약 전에 무엇을 알려드리면 되나요?",
    a: "생활권, 장소 유형(자택·호텔·오피스텔), 희망 시간대, 현재 가장 불편한 부위를 정리해 주시면 코스 안내와 가능 여부 확인이 훨씬 빨라집니다. 처음 문의일수록 짧고 정확한 정보 전달이 중요합니다.",
  },
  {
    q: "주차가 불편한 곳도 가능한가요?",
    a: "가능 여부는 건물 진입 방식과 대기 공간 조건에 따라 다릅니다. 주차 제한이 있는 경우에는 대체 진입 방법이나 도보 이동이 가능한지까지 함께 확인해 드립니다.",
  },
  {
    q: "가격은 페이지에 왜 확정 금액으로 적지 않나요?",
    a: "실제 예약은 시간대, 이동 동선, 장소 조건에 따라 변동 요소가 있어 일괄적인 숫자만 노출하면 오해가 생길 수 있습니다. 대신 상담 기준 구성과 안내 흐름을 먼저 공개하고, 실제 가능 범위 안에서만 최종 안내하는 방식을 유지하고 있습니다.",
  },
] as const;

export default function YeongdeungpoMoneyPage() {
  const { siteUrl, siteName, contentLastModified } = siteConfig;
  const url = `${siteUrl}/yeongdeungpo-chuljangmassage`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "서울", item: `${siteUrl}/#regions` },
      { "@type": "ListItem", position: 3, name: "영등포 출장마사지", item: url },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "영등포 출장마사지",
    url,
    serviceType: "방문 케어 예약 안내",
    provider: { "@type": "Organization", name: siteName, url: siteUrl },
    areaServed: [
      "여의도",
      "영등포역",
      "문래",
      "당산",
      "신길",
      "대림",
    ],
    description:
      "영등포 출장마사지 이용 전 확인해야 할 지역별 방문 안내, 예약 절차, 운영 정보, 코스 구성 안내를 제공하는 대표 페이지",
  };

  return (
    <article className="page-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />
      <div className="content-block">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <span className="breadcrumb-nav__sep">/</span>
          <span>서울</span>
          <span className="breadcrumb-nav__sep">/</span>
          <span aria-current="page">영등포 출장마사지</span>
        </nav>

        <h1 className="page-article__title">영등포 출장마사지 안내</h1>
        <p className="page-article__lead">
          영등포 생활권에서 방문 케어를 찾을 때 필요한 지역 맥락, 예약 흐름, 장소별 이용 기준, 구성 안내를 한 페이지에 정리했습니다. 광고 문구만 반복하는 페이지가 아니라 실제 문의 전에 확인해야 할 정보 위주로 구성했습니다.
        </p>

        <section className="page-article__section" id="context">
          <h2 className="page-article__section-title">A. 영등포 지역 맥락</h2>
          <p>
            영등포는 같은 구 안에서도 생활 리듬이 뚜렷하게 나뉘는 지역입니다. 여의도는 장시간 좌식 업무와 회의가 많은 비즈니스 권역이라 목·어깨·등 중심의 피로 문의가 많고,
            영등포역·타임스퀘어 권역은 쇼핑·숙박·이동 일정이 몰리면서 하체 무게감이나 일정 마무리 수요가 함께 발생하는 편입니다.
          </p>
          <p>
            문래는 외부 활동과 작업 후 회복 니즈가 반복적으로 생기기 쉽고, 당산·신길·대림은 퇴근 후 자택에서 조용히 컨디션을 정리하려는 흐름 비중이 높은 편입니다. 그래서 영등포 출장마사지는
            단순히 늦게까지 문의가 가능한 서비스가 아니라, 각 생활권의 동선과 이용 상황에 맞춰 현재 위치에서 무리 없이 케어를 받으려는 수요에 가깝습니다.
          </p>
          <p>
            이 페이지는 영등포 출장마사지라는 키워드만 반복하기보다, 실제로 여의도 직장인·영등포역 숙소 이용객·문래 작업 동선 이용자·당산 자택 이용자가 어떤 상황에서 문의하는지까지 함께 정리해
            검색 후 바로 이탈하지 않도록 돕는 대표 안내 문서 역할을 목표로 합니다.
          </p>
        </section>

        <section className="page-article__section" id="audience">
          <h2 className="page-article__section-title">B. 이용 대상별 케어 안내</h2>
          <p>
            영등포 생활권에서 문의가 많은 유형은 크게 네 가지입니다. 첫째는 여의도와 문래처럼 오래 앉아 있거나 한 자세를 유지하는 시간이 길어 목·어깨·등 라인의 긴장감이 크게 느껴지는 경우,
            둘째는 영등포역과 타임스퀘어 주변처럼 이동량이 많아 종아리·허리 무게감이 커지는 경우, 셋째는 숙소·오피스텔 이용 중 낯선 잠자리와 일정 누적으로 전신 피로가 남는 경우,
            넷째는 늦은 시간에 외부 이동 없이 조용히 컨디션을 정리하고 싶은 경우입니다.
          </p>
          <ul className="page-article__list">
            <li>직장인: 목·어깨·등 중심으로 짧고 효율적인 회복 흐름을 선호하는 경우가 많습니다.</li>
            <li>숙소 이용객: 체크인 상태, 로비 규정, 객실 동선 확인이 먼저 필요한 편입니다.</li>
            <li>장거리 이동 후: 하체와 허리 중심으로 피로가 누적된 경우 전신 균형 위주의 안내가 적합합니다.</li>
            <li>늦은 시간 이용: 심야 가능 범위와 진입 동선을 먼저 확인해야 실제 대기 시간이 줄어듭니다.</li>
          </ul>
          <p>
            중요한 점은 누구에게나 같은 설명을 반복하는 것이 아니라, 현재 있는 장소와 시간대, 가장 불편한 부위를 기준으로 안내를 달리하는 것입니다. 그래서 문의 전에는 위치와 장소 유형,
            희망 시간 범위, 집중이 필요한 부위를 먼저 정리하는 것이 가장 효율적입니다.
          </p>
        </section>

        <section className="page-article__section" id="service-scope">
          <h2 className="page-article__section-title">C. 서비스 범위와 운영 방식</h2>
          <p>
            영등포 출장마사지 예약에서 만족도를 가장 크게 좌우하는 것은 화려한 문구보다도 서비스 범위와 운영 흐름이 얼마나 명확한지입니다. 실제 문의 단계에서는 위치와 장소 유형,
            진입 동선, 희망 시간대가 먼저 정리되어야 하며, 이 정보가 정확할수록 가능한 범위를 빠르게 안내할 수 있습니다.
          </p>
          <ul className="page-article__list">
            <li>가능 장소: 자택 / 호텔 / 오피스텔 / 레지던스 (출입 조건에 따라 확인)</li>
            <li>운영 방식: 24시간 문의 가능, 실제 방문 가능 범위는 시간대별로 안내</li>
            <li>예약 순서: 생활권 확인 → 장소 유형 확인 → 시간대 조율 → 집중 부위 안내</li>
            <li>상담 시 필요 정보: 건물명 또는 생활권, 진입 방식, 가능한 시간 범위</li>
            <li>주요 안내 지역: 여의도·영등포역·문래·당산·신길·대림 중심</li>
          </ul>
          <p>
            특히 영등포처럼 오피스텔·숙소·주거지가 섞여 있는 지역은 같은 주소권 안에서도 안내 방식이 달라질 수 있습니다. 그래서 페이지 안에서 서비스 범위와 문의 순서를 먼저 공개하면,
            사용자는 이 페이지를 단순 광고가 아니라 실제 예약 전에 참고할 수 있는 문서로 인식하게 됩니다.
          </p>
          <p>
            바로 진행은 <Link href="/reserve" className="prose__subtitle-link">영등포 출장마사지 예약문의</Link>에서 가능합니다.
          </p>
        </section>

        <section className="page-article__section" id="guide-table">
          <h2 className="page-article__section-title">D. 구성 안내표</h2>
          <p>
            실제 예약은 당일 동선과 시간대, 장소 조건에 따라 조정됩니다. 다만 문의 전에 대략적인 흐름을 이해할 수 있도록 상담 기준 구성표를 공개합니다. 이 섹션은 키워드만 반복하는 페이지와
            차별화되는 핵심 파트로, 사용자가 어떤 구성이 본인 상황에 맞는지 가늠할 수 있도록 돕습니다.
          </p>
          <ul className="page-article__list">
            <li>60분: 특정 부위를 중심으로 짧고 빠르게 정리하려는 경우에 적합</li>
            <li>90분: 상·하체 균형을 보면서 집중 부위를 함께 관리하려는 경우에 적합</li>
            <li>120분: 전신 흐름을 기준으로 주요 피로 부위를 보다 여유 있게 정리하려는 경우에 적합</li>
          </ul>
          <p>
            예를 들어 여의도 업무권 이용자는 60분 또는 90분 흐름을 선호하는 비율이 높고, 영등포역 숙소나 장거리 이동 이후에는 90분 이상 문의가 더 많은 편입니다. 이처럼 구성 안내표는
            단순한 시간 표기가 아니라, 생활권별 이용 장면과 연결되어야 실제 검색 의도와도 맞아집니다.
          </p>
          <p>
            세부 비용과 최종 구성은 문의 시 확정되며, 과장되거나 허위성 있는 가격 문구 대신 실제 운영 기준에 맞는 범위 안에서만 안내합니다.
          </p>
        </section>

        <section className="page-article__section" id="trust">
          <h2 className="page-article__section-title">E. 안전·신뢰 가이드</h2>
          <p>
            영등포 출장마사지처럼 현장 방문이 포함되는 서비스는 사용자가 가장 먼저 보는 요소가 신뢰입니다. 그래서 이 페이지에서는 과한 표현보다 예약 확정 전 어떤 정보를 확인하는지,
            취소와 변경은 어떤 기준으로 안내하는지, 방문 전에는 무엇을 다시 체크하는지를 명확히 공개합니다.
          </p>
          <ul className="page-article__list">
            <li>예약 확정 전 위치·동선·시간대를 먼저 확인합니다.</li>
            <li>취소·변경 기준은 예약 시간 2시간 전을 원칙으로 사전 안내합니다.</li>
            <li>방문 전 최종 안내를 통해 진입 동선을 다시 확인합니다.</li>
            <li>허위·과장 문구를 지양하고 실제 가능 범위만 안내합니다.</li>
            <li>초행 고객도 이해할 수 있도록 안내 순서를 단순하게 유지합니다.</li>
          </ul>
          <p>
            검색엔진 입장에서도 이런 신뢰 파트는 매우 중요합니다. 사용자가 자주 불안해하는 요소를 먼저 설명하는 페이지일수록 체류 시간과 스크롤 깊이가 좋아지고, 단순 광고성 문서보다 정보형 문서로
            인식될 가능성이 높습니다.
          </p>
        </section>

        <section className="page-article__section" id="faq">
          <h2 className="page-article__section-title">F. 자주 묻는 질문</h2>
          <p>
            실제 검색 사용자는 단순히 영등포 출장마사지라는 단어 하나만 찾는 것이 아니라, 여의도 오피스텔이 가능한지, 영등포역 숙소도 되는지, 늦은 시간 이용이 가능한지처럼 구체적인 상황을 함께
            확인합니다. 아래 질문은 실제 문의 전에 가장 많이 정리되는 항목을 기준으로 구성했습니다.
          </p>
          <ul className="faq-list" role="list">
            {FAQ_ITEMS.map((item) => (
              <li key={item.q} className="faq-list__item">
                <h3 className="faq-list__q">{item.q}</h3>
                <p className="faq-list__a">{item.a}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="page-article__section" id="related-docs">
          <h2 className="page-article__section-title">함께 보면 좋은 문서</h2>
          <p>
            대표 페이지 하나만으로 상위권 경쟁을 하기 어렵기 때문에, 실제 예약 흐름과 연결되는 보조 문서를 함께 두는 편이 좋습니다. 아래 문서는 영등포 대표 페이지와 내부 링크 구조를 만들기 위한
            핵심 연결 문서입니다.
          </p>
          <ul className="page-article__list">
            <li><Link href="/reserve" className="prose__subtitle-link">영등포 출장마사지 예약문의</Link></li>
            <li><Link href="/regions/common/reservation-guide" className="prose__subtitle-link">출장마사지 예약 가이드</Link></li>
            <li><Link href="/regions/common/allnight" className="prose__subtitle-link">24시간 출장마사지 안내</Link></li>
            <li><Link href="/guides/yeongdeungpo-checklist" className="prose__subtitle-link">영등포 출장마사지 예약 전 체크리스트</Link></li>
            <li><Link href="/guides/yeouido-night-care" className="prose__subtitle-link">여의도 직장인 야간 케어 가이드</Link></li>
            <li><Link href="/guides/yeongdeungpo-zone-visit" className="prose__subtitle-link">당산·문래·신길 지역별 방문 안내</Link></li>
            <li><Link href="/guides/hotel-officetel-checkpoints" className="prose__subtitle-link">호텔·오피스텔 이용 시 확인할 점</Link></li>
          </ul>
        </section>

        <p className="page-article__lead" style={{ marginTop: "1.25rem" }}>
          마지막 수정일: {new Date(contentLastModified).toLocaleDateString("ko-KR")}
        </p>
      </div>
    </article>
  );
}
