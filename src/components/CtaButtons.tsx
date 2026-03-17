import { siteConfig } from "@/lib/site-config";

function cleanPhone(phone: string) {
  return phone.replace(/[\s-]/g, "");
}

export function CtaButtons({ telephone }: { telephone: string }) {
  const num = cleanPhone(telephone);
  const telHref = `tel:${num}`;
  const smsHref = `sms:${num}`;

  return (
    <div className="cta-buttons">
      <a href={telHref} className="cta-buttons__tel" aria-label="전화하기">
        전화하기
      </a>
      <a href={smsHref} className="cta-buttons__sms" aria-label="문자하기">
        문자하기
      </a>
    </div>
  );
}

/** 출장마사지·출장안마·출장스웨디시 예약 */
export function CtaButtonsFromConfig() {
  const { nap } = siteConfig;
  return <CtaButtons telephone={nap.telephone} />;
}
