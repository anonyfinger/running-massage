import type { ReactNode } from "react";
import Link from "next/link";

const MD_LINK = /\[([^\]]+)\]\((\/[^)]+)\)/g;

/** 내부 경로만 허용 — open redirect·외부 URL 주입 방지 */
function isAllowedInternalPath(href: string): boolean {
  if (!href.startsWith("/") || href.includes("..") || /[\s?#]/.test(href)) {
    return false;
  }
  const parts = href.split("/").filter(Boolean);
  if (parts.length === 0) {
    return false;
  }
  return parts.every((p) => /^[a-zA-Z0-9\-]+$/.test(p));
}

type Props = { children: string };

/**
 * 블로그 본문 단락. `[표시 텍스트](/경로)` 형태만 `<Link>`로 렌더합니다.
 */
export function BlogParagraph({ children }: Props) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(MD_LINK.source, "g");
  let k = 0;
  while ((match = re.exec(children)) !== null) {
    const [full, label, href] = match;
    if (match.index > last) {
      nodes.push(children.slice(last, match.index));
    }
    if (isAllowedInternalPath(href)) {
      nodes.push(
        <Link key={k++} href={href} className="prose__subtitle-link">
          {label}
        </Link>,
      );
    } else {
      nodes.push(full);
    }
    last = match.index + full.length;
  }
  if (last < children.length) {
    nodes.push(children.slice(last));
  }
  return <p>{nodes.length > 0 ? nodes : children}</p>;
}
