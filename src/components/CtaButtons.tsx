import { siteConfig } from "@/lib/site-config";

export function CtaButtons({ telephone }: { telephone: string }) {
  const telHref = `tel:${telephone.replace(/[\s-]/g, "")}`;

  return (
    <div className="cta-buttons">
      <a href={telHref} className="cta-buttons__tel" aria-label="전화 문의">
        전화 연결
      </a>
    </div>
  );
}

/** 출장마사지·출장안마·출장스웨디시 예약 */
export function CtaButtonsFromConfig() {
  const { nap } = siteConfig;
  return <CtaButtons telephone={nap.telephone} />;
}
