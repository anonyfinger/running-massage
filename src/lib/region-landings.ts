export const REGIONS_HUB_PATH = "/regions";
export const SEOUL_REGIONS_PATH = "/regions/seoul";

export type RegionLandingSlug = "yeongdeungpo";

export type RegionLandingSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type RegionLandingFaqItem = {
  q: string;
  a: string;
};

export type RegionLandingCard = {
  title: string;
  body: string;
};

export type RegionLandingAnswer = {
  question: string;
  answer: string;
};

export type RegionLandingImage = {
  src: string;
  alt: string;
};

export type RegionLandingLink = {
  label: string;
  href: string;
};

export type RegionLandingMeta = {
  slug: RegionLandingSlug;
  name: string;
  district: string;
  cityLabel: string;
  heroTitle: string;
  lead: string;
  introParagraphs: string[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  quickAnswers: RegionLandingAnswer[];
  summaryCards: RegionLandingCard[];
  bookingSteps: RegionLandingCard[];
  localSignals: RegionLandingCard[];
  visuals?: {
    afterIntro?: RegionLandingImage;
    afterQuickAnswers?: RegionLandingImage;
    afterLocalSignals?: RegionLandingImage;
    beforeRelatedDocs?: RegionLandingImage;
  };
  sections: RegionLandingSection[];
  faqItems: readonly RegionLandingFaqItem[];
  relatedDocs: RegionLandingLink[];
  areaServed: string[];
};

export function getRegionLandingPath(slug: RegionLandingSlug) {
  return `${REGIONS_HUB_PATH}/${slug}`;
}

export function getCityLandingPath(city: "seoul") {
  return city === "seoul" ? SEOUL_REGIONS_PATH : REGIONS_HUB_PATH;
}

const YEONGDEUNGPO_FAQ_ITEMS = [
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
] as const satisfies readonly RegionLandingFaqItem[];

export const regionLandings: RegionLandingMeta[] = [
  {
    slug: "yeongdeungpo",
    name: "영등포 출장마사지",
    district: "영등포",
    cityLabel: "서울",
    heroTitle: "영등포 출장마사지",
    lead:
      "영등포 생활권에서 방문 케어를 찾을 때 필요한 지역 맥락, 예약 흐름, 장소별 이용 기준, 실전 가이드를 한 페이지에 정리했습니다.",
    introParagraphs: [
      "광고성 문구를 반복하기보다 실제 문의 전에 확인해야 할 정보 중심으로 구성한 영등포 대표 페이지입니다.",
      "이 문서는 영등포 출장마사지 키워드로 들어온 사용자가 바로 예약 가능 여부를 판단할 수 있도록 지역 맥락, 이용 대상, 예약 절차, 장소별 기준까지 순서대로 읽히게 설계했습니다.",
    ],
    metadata: {
      title: "영등포 출장마사지 | 여의도·당산·문래 예약 안내 대표페이지",
      description:
        "영등포 출장마사지 대표 페이지입니다. 여의도·당산·문래·신길 생활권 이용 흐름, 예약 절차, 장소별 안내, 실전 가이드를 한 페이지에서 확인할 수 있습니다.",
      keywords: [
        "영등포 출장마사지",
        "영등포출장안마",
        "여의도 출장마사지",
        "당산 출장마사지",
        "문래 출장마사지",
        "신길 출장마사지",
        "영등포 출장마사지 예약",
        "영등포 출장마사지 안내",
      ],
    },
    quickAnswers: [
      {
        question: "영등포 출장마사지는 어떤 페이지인가요?",
        answer:
          "영등포 생활권에서 실제로 많이 묻는 이용 장면, 예약 흐름, 장소 선택 기준을 한 번에 정리한 대표 지역 페이지입니다.",
      },
      {
        question: "어떤 지역까지 함께 보나요?",
        answer:
          "여의도, 영등포역, 문래, 당산, 신길, 대림처럼 영등포 생활권 안에서 이동과 예약 맥락이 비슷한 지역을 함께 봅니다.",
      },
      {
        question: "예약 전에 가장 먼저 확인할 것은 무엇인가요?",
        answer:
          "현재 위치, 장소 유형, 희망 시간대, 가장 불편한 부위 네 가지를 먼저 정리하면 실제 안내 속도가 훨씬 빨라집니다.",
      },
      {
        question: "이 페이지 다음에는 어디로 이동하면 되나요?",
        answer:
          "전체 흐름은 이 페이지에서 보고, 실제 문의 준비는 예약 가이드와 예약문의 페이지로 이어지는 구조가 가장 자연스럽습니다.",
      },
    ],
    summaryCards: [
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
    ],
    bookingSteps: [
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
    ],
    localSignals: [
      {
        title: "대표 생활권",
        body: "여의도 업무권, 영등포역 숙소권, 문래 작업 동선, 당산·신길 주거권처럼 이용 맥락이 분명한 생활권을 중심으로 읽히게 구성했습니다.",
      },
      {
        title: "장소 유형",
        body: "자택, 호텔, 오피스텔, 레지던스처럼 실제 문의에서 자주 나오는 장소 유형을 기준으로 안내 흐름을 분리했습니다.",
      },
      {
        title: "시간대 판단",
        body: "평일 저녁, 심야, 당일 문의처럼 예약 속도와 응대 방식이 달라지는 시간대 요소를 별도로 설명합니다.",
      },
      {
        title: "문서 역할",
        body: "영등포 키워드의 대표 랜딩 역할을 맡고, 예약 가이드와 보조 가이드 문서로 내부 링크를 연결하는 중심 문서입니다.",
      },
    ],
    visuals: {
      afterIntro: {
        src: "/post_img/출장마사지-이용-시나리오-직장인.jpg",
        alt: "영등포 출장마사지 이용 흐름을 보여주는 직장인 방문 마사지 장면",
      },
      afterQuickAnswers: {
        src: "/post_img/출장안마-이용-시나리오-호텔.jpg",
        alt: "영등포 호텔과 숙소 이용 흐름을 연상시키는 출장안마 이용 장면",
      },
      afterLocalSignals: {
        src: "/post_img/출장마사지-전신-코스-전문-관리.jpg",
        alt: "영등포 출장마사지 코스 선택과 전신 관리 흐름을 보여주는 이미지",
      },
      beforeRelatedDocs: {
        src: "/post_img/출장마사지-준비-및-예약-안내.jpg",
        alt: "영등포 출장마사지 예약 전 준비와 문의 흐름을 보여주는 안내 이미지",
      },
    },
    sections: [
      {
        id: "context",
        title: "영등포 출장마사지가 필요한 생활권 맥락",
        paragraphs: [
          "영등포는 같은 구 안에서도 생활 리듬이 뚜렷하게 나뉘는 지역입니다. 여의도는 장시간 좌식 업무와 회의가 많은 비즈니스 권역이라 목·어깨·등 중심의 피로 문의가 많고, 영등포역·타임스퀘어 권역은 쇼핑·숙박·이동 일정이 몰리면서 하체 무게감이나 일정 마무리 수요가 함께 발생하는 편입니다.",
          "문래는 외부 활동과 작업 후 회복 니즈가 반복적으로 생기기 쉽고, 당산·신길은 퇴근 후 자택에서 조용히 컨디션을 정리하려는 흐름 비중이 높은 편입니다. 그래서 영등포 출장마사지는 단순히 늦게까지 문의가 가능한 서비스가 아니라, 각 생활권의 동선과 이용 상황에 맞춰 현재 위치에서 무리 없이 케어를 받으려는 수요에 가깝습니다.",
          "이 페이지는 영등포 출장마사지 대표 페이지로서 여의도 직장인, 영등포역 숙소 이용객, 문래 작업 동선 이용자, 당산·신길 주거권 이용자가 어떤 상황에서 문의하는지까지 함께 정리해 검색 후 바로 이탈하지 않도록 돕는 역할을 목표로 합니다.",
        ],
      },
      {
        id: "audience",
        title: "영등포 출장마사지 이용 대상과 주요 상황",
        paragraphs: [
          "영등포 생활권에서 문의가 많은 유형은 크게 네 가지입니다. 첫째는 여의도와 문래처럼 오래 앉아 있거나 한 자세를 유지하는 시간이 길어 목·어깨·등 라인의 긴장감이 크게 느껴지는 경우, 둘째는 영등포역과 타임스퀘어 주변처럼 이동량이 많아 종아리·허리 무게감이 커지는 경우, 셋째는 숙소·오피스텔 이용 중 낯선 잠자리와 일정 누적으로 전신 피로가 남는 경우, 넷째는 늦은 시간에 외부 이동 없이 조용히 컨디션을 정리하고 싶은 경우입니다.",
          "직장인, 숙소 이용객, 장거리 이동 후 이용자, 늦은 시간 이용자 모두 같은 설명을 반복해서 듣기보다 현재 있는 장소와 시간대, 가장 불편한 부위를 기준으로 안내를 달리하는 편이 효율적입니다.",
          "그래서 문의 전에는 위치와 장소 유형, 희망 시간 범위, 집중이 필요한 부위를 먼저 정리하는 것이 가장 실용적입니다.",
        ],
      },
      {
        id: "service-scope",
        title: "영등포 출장마사지 예약 흐름과 운영 기준",
        paragraphs: [
          "영등포 출장마사지 예약에서 만족도를 가장 크게 좌우하는 것은 화려한 문구보다도 서비스 범위와 운영 흐름이 얼마나 명확한지입니다. 실제 문의 단계에서는 위치와 장소 유형, 진입 동선, 희망 시간대가 먼저 정리되어야 하며, 이 정보가 정확할수록 가능한 범위를 빠르게 안내할 수 있습니다.",
          "가능 장소는 자택, 호텔, 오피스텔, 레지던스 중심이며 출입 조건은 별도 확인이 필요합니다. 24시간 문의는 가능하지만 실제 방문 가능 범위는 시간대별로 달라질 수 있어 사전 조율이 중요합니다.",
          "특히 영등포처럼 오피스텔·숙소·주거지가 섞여 있는 지역은 같은 주소권 안에서도 안내 방식이 달라질 수 있습니다. 그래서 페이지 안에서 서비스 범위와 문의 순서를 먼저 공개하면, 사용자는 이 페이지를 단순 광고가 아니라 실제 예약 전에 참고할 수 있는 문서로 인식하게 됩니다.",
        ],
      },
      {
        id: "guide-table",
        title: "영등포 출장마사지 코스 선택 가이드",
        paragraphs: [
          "실제 예약은 당일 동선과 시간대, 장소 조건에 따라 조정됩니다. 다만 문의 전에 대략적인 흐름을 이해할 수 있도록 상담 기준 구성표를 공개합니다. 이 섹션은 키워드만 반복하는 페이지와 차별화되는 핵심 파트로, 사용자가 어떤 구성이 본인 상황에 맞는지 가늠할 수 있도록 돕습니다.",
          "60분은 특정 부위를 중심으로 짧고 빠르게 정리하려는 경우, 90분은 상·하체 균형을 보면서 집중 부위를 함께 관리하려는 경우, 120분은 전신 흐름을 기준으로 주요 피로 부위를 보다 여유 있게 정리하려는 경우에 적합합니다.",
          "예를 들어 여의도 업무권 이용자는 60분 또는 90분 흐름을 선호하는 비율이 높고, 영등포역 숙소나 장거리 이동 이후에는 90분 이상 문의가 더 많은 편입니다. 이처럼 구성 안내표는 단순한 시간 표기가 아니라, 생활권별 이용 장면과 연결되어야 실제 검색 의도와도 맞아집니다.",
        ],
      },
      {
        id: "trust",
        title: "영등포 출장마사지 이용 전 확인할 신뢰 기준",
        paragraphs: [
          "영등포 출장마사지처럼 현장 방문이 포함되는 서비스는 사용자가 가장 먼저 보는 요소가 신뢰입니다. 그래서 이 페이지에서는 과한 표현보다 예약 확정 전 어떤 정보를 확인하는지, 취소와 변경은 어떤 기준으로 안내하는지, 방문 전에는 무엇을 다시 체크하는지를 명확히 공개합니다.",
          "예약 확정 전에는 위치·동선·시간대를 먼저 확인하고, 취소·변경 기준은 예약 시간 2시간 전을 원칙으로 사전 안내합니다. 방문 전 최종 안내를 통해 진입 동선을 다시 확인하며, 허위·과장 문구를 지양하고 실제 가능 범위만 안내합니다.",
          "검색엔진 입장에서도 이런 신뢰 파트는 중요합니다. 사용자가 자주 불안해하는 요소를 먼저 설명하는 페이지일수록 단순 광고성 문서보다 정보형 문서로 인식될 가능성이 높습니다.",
        ],
      },
    ],
    faqItems: YEONGDEUNGPO_FAQ_ITEMS,
    relatedDocs: [
      { label: "출장마사지 예약문의 페이지", href: "/reserve" },
      { label: "24시간 출장마사지 이용 안내", href: "/regions/common/allnight" },
      { label: "출장마사지 예약 가이드", href: "/regions/common/reservation-guide" },
      { label: "영등포 출장마사지 예약 전 체크리스트", href: "/guides/yeongdeungpo-checklist" },
      { label: "여의도 이용자를 위한 야간 가이드", href: "/guides/yeouido-night-care" },
      { label: "영등포 생활권 방문 안내", href: "/guides/yeongdeungpo-zone-visit" },
      { label: "호텔·오피스텔 이용 체크포인트", href: "/guides/hotel-officetel-checkpoints" },
    ],
    areaServed: ["여의도", "영등포역", "문래", "당산", "신길", "대림"],
  },
];

export function getAllRegionLandings() {
  return regionLandings;
}

export function getRegionLanding(slug: string) {
  return regionLandings.find((item) => item.slug === slug);
}

export function getRepresentativeRegionLinks() {
  return regionLandings.map((item) => ({
    href: getRegionLandingPath(item.slug),
    label: item.name,
  }));
}

export function getSeoulRegionLandings() {
  return regionLandings.filter((item) => item.cityLabel === "서울");
}
