import { siteConfig } from "@/lib/site-config";
import { CtaButtonsFromConfig } from "@/components/CtaButtons";

const KAKAO_OPEN_URL = "https://open.kakao.com/o/s";

export function ProfileCtaSection() {
  const { profile, nap } = siteConfig;
  const telHref = `tel:${nap.telephone.replace(/\s/g, "")}`;
  const kakaoHref = `${KAKAO_OPEN_URL}/${nap.kakaoId}`;
  const hasTelegram = nap.telegram && nap.telegram.trim() !== "";

  return (
    <section className="profile-cta" aria-labelledby="profile-cta-heading">
      <div className="profile-cta__card">
        <h2 id="profile-cta-heading" className="profile-cta__name">
          {profile.name}
        </h2>
        <a href={telHref} className="profile-cta__tel" aria-label="전화 문의">
          {nap.telephone.replace(/\s/g, "-")}
        </a>
        <div className="profile-cta__messengers">
          <span className="profile-cta__label">KakaoTalk:</span>{" "}
          <a
            href={kakaoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-cta__link"
          >
            {nap.kakaoId}
          </a>
          {hasTelegram && (
            <>
              <span className="profile-cta__divider">·</span>
              <span className="profile-cta__label">Telegram:</span>{" "}
              <span className="profile-cta__id">{nap.telegram}</span>
            </>
          )}
        </div>
        <div className="profile-cta__buttons">
          <CtaButtonsFromConfig />
        </div>
      </div>
    </section>
  );
}
