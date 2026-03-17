import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { regions } from "@/lib/region-posts";
import { RegionsListStructuredData } from "@/components/RegionStructuredData";

export const metadata = createSocialMetadata({
  title: "지역별 안내",
  description: "출장마사지·출장안마·출장스웨디시 지역별 정보. 서울·강남·인천·수원·부천 등 지역별 이용 안내.",
  path: "/regions",
  keywords: ["지역별 출장마사지", "서울 출장마사지", "강남 출장마사지", "출장안마"],
});

export default function RegionsPage() {
  return (
    <>
      <RegionsListStructuredData />
      <article className="page-article regions-page">
      <div className="content-block">
        <h1 className="page-article__title">지역별 안내</h1>
        <p className="page-article__lead">
          출장마사지·출장안마·출장스웨디시 및 관련 서비스의 지역별 정보를 확인하세요.
        </p>
        <p className="page-article__sub">
          각 지역을 선택하면 테마별 게시글 목록을 볼 수 있습니다.
        </p>

        <ul className="region-list" role="list">
          {regions.map((region) => (
            <li key={region.slug} className="region-list__item">
              <Link href={`/regions/${region.slug}`} className="region-list__card">
                <h2 className="region-list__title">{region.name}</h2>
                <p className="region-list__desc">{region.description}</p>
                <span className="region-list__count">
                  게시글 {region.articles.length}개
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
    </>
  );
}
