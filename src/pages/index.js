import Image from "next/image";
import { Roboto } from "next/font/google";
import getHomeData from "@/utils/homeApis";
import { SiSamsung, SiHuawei, SiAsus, SiDell, SiHp } from 'react-icons/si'
import { BsApple,  } from 'react-icons/bs'
import { getLatestProducts } from "@/utils/productsApis";
import ProductCard from "./components/productCard/ProductCard";

const inter = Roboto({ subsets: ["latin"], weight: ['400', '700'] });

const sketelonLoding = () => {
  return (
    <div className="animate-pulse flex flex-col gap-5">
      <div className="h-96 bg-gray-300 rounded-lg"></div>
      <div className="h-5 bg-gray-300 rounded-full"></div>
      <div className="h-5 bg-gray-300 rounded-full"></div>
      <div className="h-5 bg-gray-300 rounded-full"></div>
    </div>
  )
}

export default function Home({ homeData, latestProducts }) {

  // Accessing title only when heroData is available
  const title = homeData ? homeData.attributes.title : '';
  const description = homeData ? homeData.attributes.description[0].children[0].text : '';
  const imageUrl = homeData ? homeData.attributes.image.data.attributes.url : '';

  return (
    <main className={`container min-h-screen ${inter.className}`}>
      {/*Hero Sections */}
      {homeData && (
        // Render the data once it is available
        <div className='pt-24 relative'>
          <Image priority={false} src={imageUrl} className="rounded-lg" alt='Picture of the author' width={1920} height={1080} />
          <div className='absolute left-0 top-1/2 -translate-y-1/2 w-1/2 flex flex-col gap-10'>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='text-xl'>
              {description}
            </p>
            <a
              className='px-5 py-2 rounded-full border-2 border-black text-black w-fit bg-white hover:bg-gray-100 transition-colors duration-300 ease-in-out'
              href='#'
            >
              Shop Now
            </a>
          </div>
        </div>
      )}
      {/*Top Brands */}
      <div className='py-10'>
        <ul className='items-center grid grid-cols-6 place-items-center gap-5'>
            <li className='text-9xl text-gray-500'><SiSamsung /></li>
            <li className='text-5xl text-gray-500'><SiHuawei /> </li>
            <li className='text-5xl text-gray-500'><BsApple /></li>
            <li className='text-5xl text-gray-500'><SiAsus /></li>
            <li className='text-5xl text-gray-500'><SiDell /></li>
            <li className='text-5xl text-gray-500'><SiHp /></li>
        </ul>
      </div>

      {/*Latest Products */}
      <div className='py-10'>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Latest Products</h2>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {latestProducts.map((product) => (
                <ProductCard
                    id={product.id}
                    name={product.attributes.name}
                    price={product.attributes.price}
                    finalPrice={product.attributes.finalPrice}
                    rating={product.attributes.rating}
                    discount={product.attributes.discount}
                    slug={product.attributes.slug}
                    imageUrl={product.attributes.image.data.attributes.url}
                />
            ))}
        </div>
      </div>
      {/*Ad Samsung or ...*/}
    </main>
  );
}

export async function getServerSideProps() {
  const homeData = await getHomeData();
  const latestProducts = await getLatestProducts();
  return {
    props: {
      homeData: homeData.data,
      latestProducts: latestProducts.data,
    },
  };
}

