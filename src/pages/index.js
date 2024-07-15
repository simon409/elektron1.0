import { Lato } from "next/font/google";
import { getHomeData, getHomeAds, getCategories, getLimitedOffer } from "@/utils/homeApis";
import { getLatestProducts } from "@/utils/productsApis";
import SEO from "@/sections/SEO";
import Hero from "./components/LandingPage/Hero";
import LatestProducts from "./components/LandingPage/LatestProducts";
import Ads from "./components/LandingPage/Ads";
import Categories from "./components/LandingPage/Categories";
import LimitedOffer from "./components/LandingPage/LimitedOffer";

const inter = Lato({ subsets: ["latin"], weight: ['400', '700'] });

export default function Home({ homeData, latestProducts, homeAds, categoriesData, limitedOfferData }) {
  const title = homeData?.attributes?.title || '';
  const description = homeData?.attributes?.description?.[0]?.children?.[0]?.text || '';
  const imageUrl = homeData?.attributes?.image?.data?.attributes?.url || '';

  return (
    <>
      <SEO title={title} description={description} image={imageUrl} />
      <main className={`container min-h-screen ${inter.className}`}>
        <Hero homeData={homeData} />
        <Categories categoriesData={categoriesData} />
        <LatestProducts latestProducts={latestProducts} />
        { limitedOfferData && <LimitedOffer limitedOfferData={limitedOfferData} /> }
        <Ads homeAds={homeAds} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const [homeData, latestProducts, homeAds, categoriesData, limitedOfferData] = await Promise.all([
      getHomeData(),
      getLatestProducts(),
      getHomeAds(),
      getCategories(),
      getLimitedOffer()
    ]);

    return {
      props: {
        homeData: homeData.data,
        latestProducts: latestProducts.data,
        homeAds: homeAds.data,
        categoriesData: categoriesData.data,
        limitedOfferData: limitedOfferData.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        homeData: null,
        latestProducts: [],
        homeAds: null,
        categoriesData: [],
        limitedOfferData: null,
      },
    };
  }
}