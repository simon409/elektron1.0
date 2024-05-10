import { Lato } from "next/font/google";
import { getHomeData, getHomeAds, getCategories } from "@/utils/homeApis";
import { getLatestProducts } from "@/utils/productsApis";
import SEO from "@/sections/SEO";
import Hero from "./components/LandingPage/Hero";
import LatestProducts from "./components/LandingPage/LatestProducts";
import Ads from "./components/LandingPage/Ads";
import Categories from "./components/LandingPage/Categories";

const inter = Lato({ subsets: ["latin"], weight: ['400', '700'] });

export default function Home({ homeData, latestProducts, homeAds, categoriesData }) {

  console.log(categoriesData);

  // Accessing title only when heroData is available
  const title = homeData ? homeData.attributes.title : '';
  const description = homeData ? homeData.attributes.description[0].children[0].text : '';
  const imageUrl = homeData ? homeData.attributes.image.data.attributes.url : '';

  return (
    <>
      <SEO title={title} description={description} image={imageUrl}/>
      <main className={`container min-h-screen ${inter.className}`}>

        <Hero homeData={homeData} />

        {/*Categories */}

        <Categories categoriesData={categoriesData} />

        {/*Featured Products */}



        {/*Popular Products */}


        {/*Latest Products */}
        <LatestProducts latestProducts={latestProducts} />

        {/*Ad Samsung or ...*/}
        <Ads homeAds={homeAds}/>

        {/*shopping guide */}

        {/*news letter */}

      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const homeData = await getHomeData();
    const latestProducts = await getLatestProducts();
    const homeAds = await getHomeAds();
    const categoriesData = await getCategories();
    return {
      props: {
        homeData: homeData.data,
        latestProducts: latestProducts.data,
        homeAds: homeAds.data,
        categoriesData: categoriesData.data,
      },
    };
  } catch (error) {
    return {
      props: {
        homeData: null,
        latestProducts: [],
        homeAds: null,
        categoriesData: [],
      },
    };
  }
}

