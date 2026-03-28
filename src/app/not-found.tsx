import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 | 출장마사지",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <article className="content-block" style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>페이지를 찾을 수 없습니다</h1>
      <p style={{ marginBottom: "2rem", color: "var(--color-text-muted, #888)" }}>
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <nav aria-label="추천 페이지">
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          <li><Link href="/" className="prose__subtitle-link">홈으로 돌아가기</Link></li>
          <li><Link href="/massage" className="prose__subtitle-link">출장마사지</Link></li>
          <li><Link href="/anma" className="prose__subtitle-link">출장안마</Link></li>
          <li><Link href="/swedish" className="prose__subtitle-link">출장스웨디시</Link></li>
          <li><Link href="/regions" className="prose__subtitle-link">지역별 안내</Link></li>
        </ul>
      </nav>
    </article>
  );
}
