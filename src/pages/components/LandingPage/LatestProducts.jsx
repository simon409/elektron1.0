import { getLatestProducts } from "@/utils/productsApis";

import React from 'react'
import ProductCard from "../Cards/ProductCard";

const LatestProducts = ({latestProducts}) => {
  return (
    <div className='py-10'>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Latest Products</h2>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {latestProducts.map((product) => (
                <ProductCard
                    id={product.id}
                    name={product.attributes.name}
                    price={product.attributes.price}
                    finalPrice={product.attributes.finalPrice}
                    discount={product.attributes.discount}
                    slug={product.attributes.slug}
                    imageUrl={product.attributes.image.data[0].attributes.url}
                />
            ))}
        </div>
    </div>
  )
}

export default LatestProducts