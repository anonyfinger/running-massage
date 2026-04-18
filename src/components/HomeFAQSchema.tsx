import { siteConfig } from "@/lib/site-config";
import { toJsonLd } from "@/lib/structured-data";

/** 구글 FAQ 리치결과용 — 홈 본문과 겹치지 않게, 세 키워드 나열은 최소화 */
export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "이 사이트에서는 무엇을 먼저 확인하면 되나요?",
    answer:
      "홈에서는 브랜드와 전체 구조를 먼저 확인하면 됩니다. 현재는 영등포·강남·강서 대표 지역 페이지를 운영 중이며, 지역 검색 의도가 분명하면 해당 대표 페이지로 바로 이동하는 흐름이 가장 자연스럽습니다.",
  },
  {
    question: "홈과 지역 대표 페이지는 어떤 차이가 있나요?",
    answer:
      "홈은 브랜드 허브로서 서비스 구조와 연결 문서를 정리하고, 지역 대표 페이지는 특정 생활권 키워드의 실제 검색 의도와 예약 판단 기준을 더 깊게 설명합니다. 두 페이지의 역할을 나눠야 검색 신호도 덜 섞입니다.",
  },
  {
    question: "왜 지역 페이지를 따로 분리했나요?",
    answer:
      "메인 페이지와 지역 키워드 페이지가 같은 역할을 하면 검색 신호가 분산되기 쉽기 때문입니다. 그래서 홈은 허브, 지역 페이지는 대표 랜딩, 예약 가이드는 전환 보조 문서로 역할을 나눴습니다.",
  },
  {
    question: "현재 어떤 지역 페이지를 운영하고 있나요?",
    answer:
      "현재는 서울 권역 안에서 영등포·강남·강서 생활권 대표 페이지를 운영하고 있습니다. 이후 다른 지역이 추가되면 서울 페이지 아래에 같은 구조로 계속 확장할 수 있도록 맞춰 두었습니다.",
  },
  {
    question: "서비스 선택 기준은 어디에서 보면 되나요?",
    answer:
      "전신·부분·집중 같은 기본 선택 기준은 `/massage` 안내 페이지에서 확인하는 편이 좋습니다. 지역 페이지는 생활권 맥락과 장소별 판단 기준에 집중하고, 서비스 일반론은 별도 문서에서 맡도록 분리했습니다.",
  },
  {
    question: "예약 가이드는 왜 따로 두었나요?",
    answer:
      "지역 대표 페이지에는 생활권과 이용 흐름을 담고, 실제 예약 단계에서 필요한 문장과 준비 사항은 예약 가이드로 분리해 필요한 정보를 더 빨리 찾을 수 있게 했기 때문입니다.",
  },
  {
    question: "24시간 안내 문서는 어떤 역할인가요?",
    answer:
      "24시간 안내 문서는 심야·새벽처럼 시간대 정보가 먼저 필요한 경우를 돕는 페이지입니다. 지역 대표 페이지와는 별도로, 늦은 시간 예약에 필요한 준비를 확인할 때 유용합니다.",
  },
];

export function HomeFAQSchema({
  items = FAQ_ITEMS,
}: {
  items?: { question: string; answer: string }[];
}) {
  const { siteUrl } = siteConfig;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faqpage`,
    url: siteUrl,
    mainEntityOfPage: { "@id": `${siteUrl}/#webpage` },
    about: [
      { "@id": `${siteUrl}/#service-hub` },
      { "@id": `${siteUrl}/#topic-chuljang-massage` },
      { "@id": `${siteUrl}/#topic-visit-massage` },
    ],
    mainEntity: items.filter(
      (item) => item.question.trim().length > 0 && item.answer.trim().length > 0,
    ).map((item) => ({
      "@type": "Question",
      name: item.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.trim(),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
    />
  );
}

