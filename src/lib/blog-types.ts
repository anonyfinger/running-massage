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
}
