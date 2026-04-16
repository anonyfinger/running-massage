import { notFound } from "next/navigation";
import { RegionLandingPage } from "@/components/RegionLandingPage";
import { createSocialMetadata } from "@/lib/seo-metadata";
import { getAllRegionLandings, getRegionLanding, getRegionLandingPath } from "@/lib/region-landings";

type Props = {
  params: Promise<{ region: string }>;
};

export function generateStaticParams() {
  return getAllRegionLandings().map((item) => ({ region: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { region } = await params;
  const landing = getRegionLanding(region);

  if (!landing) {
    return {
      title: "지역 페이지를 찾을 수 없습니다",
      robots: { index: false, follow: false },
    };
  }

  return createSocialMetadata({
    title: landing.metadata.title,
    description: landing.metadata.description,
    path: getRegionLandingPath(landing.slug),
    keywords: [...landing.metadata.keywords],
  });
}

export default async function RegionPage({ params }: Props) {
  const { region } = await params;
  const landing = getRegionLanding(region);

  if (!landing) {
    notFound();
  }

  return <RegionLandingPage region={landing} />;
}
