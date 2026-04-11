import type { BlogPost } from "./blog-types";

export type BlogClusterId =
  | "comparison"
  | "reservation"
  | "place"
  | "lifestyle"
  | "regional_life"
  | "beginner";

export interface BlogClusterDefinition {
  id: BlogClusterId;
  label: string;
  description: string;
  primaryTargetPath: string;
}

export const BLOG_CLUSTER_DEFINITIONS: Record<BlogClusterId, BlogClusterDefinition> = {
  comparison: {
    id: "comparison",
    label: "비교형",
    description: "서비스 간 차이와 선택 기준을 설명하는 글 묶음",
    primaryTargetPath: "/massage",
  },
  reservation: {
    id: "reservation",
    label: "예약형",
    description: "가격, 심야, 예약 흐름, 문의 방식 같은 예약 의도 글 묶음",
    primaryTargetPath: "/regions/common/reservation-guide",
  },
  place: {
    id: "place",
    label: "장소형",
    description: "집, 호텔, 오피스, 숙소 같은 장소별 이용 맥락 글 묶음",
    primaryTargetPath: "/regions/yeongdeungpo/massage",
  },
  lifestyle: {
    id: "lifestyle",
    label: "생활 리듬형",
    description: "퇴근 후, 주말, 연령대, 주변 검색처럼 생활 패턴 기반 글 묶음",
    primaryTargetPath: "/massage",
  },
  regional_life: {
    id: "regional_life",
    label: "지역 생활권형",
    description: "지역별 동선, 주거 패턴, 생활권 차이를 설명하는 글 묶음",
    primaryTargetPath: "/regions/yeongdeungpo/massage",
  },
  beginner: {
    id: "beginner",
    label: "초보자형",
    description: "처음 이용 전 불안 해소와 기본 체크포인트를 다루는 글 묶음",
    primaryTargetPath: "/regions/common/reservation-guide",
  },
};

const BLOG_CLUSTER_OVERRIDES: Record<string, BlogClusterId> = {
  "chuljang-massage-vs-massage-shop": "comparison",
  "chuljang-massage-price-guide": "reservation",
  "late-night-chuljang-massage": "reservation",
  "home-chuljang-massage-guide": "place",
  "hotel-chuljang-massage-guide": "place",
  "office-chuljang-massage-guide": "place",
  "nearby-chuljang-massage-tips": "lifestyle",
  "20s-chuljang-massage-guide": "lifestyle",
  "chuljang-massage-effect-duration": "lifestyle",
  "chuljang-massage-preparation-guide": "beginner",
  "chuljang-site-how-to-choose": "beginner",
};

export function getBlogClusterId(post: Pick<BlogPost, "slug" | "category">): BlogClusterId {
  const override = BLOG_CLUSTER_OVERRIDES[post.slug];
  if (override) return override;

  if (post.slug.endsWith("-local") || post.category === "지역 안내") {
    return "regional_life";
  }

  if (post.category.includes("비교")) {
    return "comparison";
  }

  if (post.category.includes("이용 가이드")) {
    return "reservation";
  }

  return "lifestyle";
}

export function getBlogClusterDefinition(post: Pick<BlogPost, "slug" | "category">): BlogClusterDefinition {
  return BLOG_CLUSTER_DEFINITIONS[getBlogClusterId(post)];
}

export function getBlogPostsInSameCluster(posts: BlogPost[], currentPost: BlogPost, limit = 3): BlogPost[] {
  const clusterId = getBlogClusterId(currentPost);
  return posts
    .filter((post) => post.slug !== currentPost.slug && getBlogClusterId(post) === clusterId)
    .slice(0, limit);
}
