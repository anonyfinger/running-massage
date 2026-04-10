/**
 * 블로그 게시글 공통 타입 — blog-posts / 키워드 롱테일 모듈에서 공유
 */
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  category: string;
  tags: string[];
  /**
   * 본문 섹션. `paragraphs` 문자열에 마크다운 링크 `[표시](/내부경로)` 를 넣으면
   * 블로그 상세에서 `<Link>`로 렌더됩니다(사이트 내부 경로만 허용).
   */
  sections: { title: string; paragraphs: string[] }[];
  /** true면 본문 하단에 지역별 안내·심층 가이드 내부 링크 블록 표시 */
  showHubLinks?: boolean;
}
