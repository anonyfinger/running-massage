import { siteConfig } from "@/lib/site-config";

export function FloatingCta() {
  const { nap } = siteConfig;
  const num = nap.telephone?.replace(/[\s-]/g, "") ?? "";
  const telHref = num ? `tel:${num}` : "#";
  const smsHref = num ? `sms:${num}` : "#";

  return (
    <div className="floating-cta" role="complementary" aria-label="연락처 바로가기">
      <a href={telHref} className="floating-cta__btn" aria-label="전화하기">
        <span className="floating-cta__icon" aria-hidden>📞</span>
        <span className="floating-cta__text">전화하기</span>
      </a>
      <a href={smsHref} className="floating-cta__btn" aria-label="문자하기">
        <span className="floating-cta__icon" aria-hidden>💬</span>
        <span className="floating-cta__text">문자하기</span>
      </a>
    </div>
  );
}
