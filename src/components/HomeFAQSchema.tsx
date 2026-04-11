import { toJsonLd } from "@/lib/structured-data";

/** 구글 FAQ 리치결과용 — 홈 본문과 겹치지 않게, 세 키워드 나열은 최소화 */
export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "이 사이트에서는 무엇을 먼저 확인하면 되나요?",
    answer:
      "우선 영등포 출장마사지 안내를 먼저 보시면 됩니다. 이 사이트는 여의도·영등포역·문래·당산·신길·대림 생활권의 예약 흐름을 중심으로 홈, 이용 안내, 예약 가이드를 압축해 정리하고 있습니다.",
  },
  {
    question: "영등포 출장마사지는 어느 생활권 기준으로 보나요?",
    answer:
      "여의도·영등포역·문래·당산·신길·대림 생활권을 기준으로 봅니다. 영등포 출장마사지 검색에서는 서울 전체보다 이 생활권 안의 업무권·주거권·호텔 동선 차이를 먼저 보는 편이 더 중요합니다.",
  },
  {
    question: "홈과 영등포 출장마사지 안내는 어떤 차이가 있나요?",
    answer:
      "홈은 영등포 출장마사지 전체 흐름을 빠르게 보여주는 시작 페이지이고, 영등포 출장마사지 안내는 실제 생활권 흐름과 장소 선택, 예약 체크포인트를 더 직접적으로 설명하는 메인 페이지입니다.",
  },
  {
    question: "영등포에서는 집과 호텔 중 어디 기준으로 보면 되나요?",
    answer:
      "영등포권에서는 집과 호텔이 가장 자주 나오는 흐름입니다. 문래·당산·신길·대림처럼 주거권은 집 예약 흐름이 자연스럽고, 여의도·영등포역 주변은 호텔 동선과 로비 접근 정보가 더 중요해지는 편입니다.",
  },
  {
    question: "예약할 때 무엇을 먼저 말하면 되나요?",
    answer:
      "희망 시간, 대략적인 위치, 집·호텔 같은 장소 유형, 집중 부위를 먼저 말씀해 주시면 됩니다. 영등포 출장마사지 예약은 지역명만 반복하기보다 생활권과 진입 정보가 함께 들어가야 실제 안내가 빨라집니다.",
  },
  {
    question: "예약 가이드는 왜 따로 두었나요?",
    answer:
      "영등포 출장마사지 안내에는 생활권과 이용 흐름을 중심으로 담고, 실제 예약 단계에서 필요한 문장과 준비 사항은 예약 가이드로 분리해 필요한 정보를 더 빨리 찾을 수 있게 했기 때문입니다.",
  },
  {
    question: "24시간 안내 문서는 어떤 역할인가요?",
    answer:
      "24시간 안내 문서는 심야·새벽처럼 시간대 정보가 먼저 필요한 경우를 돕는 페이지입니다. 영등포 출장마사지 이용 흐름과는 별도로, 늦은 시간 예약에 필요한 준비를 확인할 때 유용합니다.",
  },
];

export function HomeFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.filter(
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

