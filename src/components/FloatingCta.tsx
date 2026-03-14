import { siteConfig } from "@/lib/site-config";

export function FloatingCta() {
  const { nap } = siteConfig;
  const telHref = nap.telephone ? `tel:${nap.telephone.replace(/\s/g, "")}` : "#";

  return (
    <div className="floating-cta" role="complementary" aria-label="전화 문의 바로가기">
      <a
        href={telHref}
        className="floating-cta__btn"
        aria-label="전화 문의"
      >
        <span className="floating-cta__icon" aria-hidden>📞</span>
        <span className="floating-cta__text">전화 문의</span>
      </a>
    </div>
  );
}
