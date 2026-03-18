import { siteConfig, sectionAnchors } from "@/lib/site-config";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

export function Footer() {
  const { siteName, companyName, nap } = siteConfig;
  const fullAddress = [
    nap.address.streetAddress,
    nap.address.addressLocality,
    nap.address.addressRegion,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <div className="footer__row">
          <div>
            <p className="footer__brand">{siteName}</p>
            <div className="footer__contact">
              {nap.telephone && (
                <a href={`tel:${nap.telephone.replace(/\s/g, "")}`} className="footer__tel-item">
                  <span className="footer__tel-label">{companyName}·출장안마</span>
                  <span className="footer__tel-num">{nap.telephone}</span>
                </a>
              )}
              {fullAddress && <address>{fullAddress}</address>}
            </div>
            <CtaButtonsFromConfig />
          </div>
          <nav className="footer__nav" aria-label="푸터 메뉴">
            {sectionAnchors.map(({ id, label }) => (
              <a key={id} href={`/#${id}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <p className="footer__copy">
          <span>© {new Date().getFullYear()} {siteName}. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
