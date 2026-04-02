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
  sections: { title: string; paragraphs: string[] }[];
  /** true면 본문 하단에 지역별 안내·심층 가이드 내부 링크 블록 표시 */
  showHubLinks?: boolean;
}
