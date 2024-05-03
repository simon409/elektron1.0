import { getProductBySlug, getRating } from '@/utils/productsApis';
import React, { useEffect, useState } from 'react';

const Product = ({ content }) => {
  const { attributes, id } = content;
  const [rating, setRating] = useState(0)

    useEffect(() => {
        console.log(attributes)
        fetchRating();

    }, [])

    const fetchRating = () => {
        getRating({ productId: id }).then(res => {
            const ratings = res.data; // Array of rating objects
            let totalRating = 0;
            ratings.forEach(rating => {
                totalRating += rating.attributes.rating; // Assuming 'rating' is the field containing the actual rating value
            });

            const averageRating = ratings.length > 0 ? totalRating / ratings.length : 0;
            setRating(averageRating);
        }).catch(error => {
            console.error('Error fetching rating:', error);
        });
    }
  return (
    <main className='container min-h-screen pt-24'>
      <div className='grid grid-cols-2 gap-10'>
        <div className='w-full rounded-lg bg-gray-100 p-4 flex'>
          <img src={attributes.image.data.attributes.url} alt={attributes.name} className='max-h-[500px] m-auto' />
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl font-bold mb-4 text-black'>{attributes.name}</h1>
          <div className="flex items-center ml-auto">
            {[...Array(5)].map((_, index) => (
                <svg key={index} aria-hidden="true" className={`h-5 w-5 ${index < Math.floor(rating) ? 'text-yellow-300' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
            ))}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating.toFixed(1)}</span>
          </div>
          <p className='text-lg mb-2'>Brand: <span className='font-bold'>{attributes.brand_id.data.attributes.name}</span></p>
          {/* Rating */}
          <p className='text-lg mb-2'>Model: <span className='font-bold'>iPhoneModel-2023</span></p>
          <p className='text-lg mb-2'>Availability: {attributes.quantity > 0 ? <span className='font-bold text-green-500'>In-Stock</span> : <span className='font-bold text-red-500'>out of stock</span>}</p>
          <p className='text-lg mb-2'>SKU: <span className='font-bold'>123456789</span></p>
          <p className='text-lg mb-2'>Category: <span className='font-bold'>Smartphones</span></p>
          <p className='text-lg mb-2'>Description:</p>
          <p className='text-lg mb-6'>{attributes.description[0].children[0].text}</p>
          <div className='flex items-center mb-6'>
            <p className='text-2xl font-bold'>${attributes.finalPrice}</p>
            <p className='text-md ml-2 mr-4 line-through mt-2'>${attributes.price}</p>
            <button className='px-5 py-2 rounded-full border-2 border-black text-black w-fit bg-white hover:bg-gray-100 transition-colors duration-300 ease-in-out'>
              Add to Cart
            </button>
          </div>
          <p className='text-sm text-gray-500'>Free shipping on orders over $50</p>
        </div>
      </div>
      {/*TODO: Add a tab for description and reviews */}
      {/*Related Products */}
      <div className='py-10'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Related Products</h2>
        <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {/*ProductCard */}

        </div>
      </div>
      {/*Reviews and comments */}
      <div className='py-10'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Reviews</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='text-xl font-bold'>John Doe</h3>
            <p className='text-lg'>Great product, I love it!</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='text-xl font-bold'>Jane Doe</h3>
            <p className='text-lg'>I love it, I will buy it again!</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export async function getServerSideProps({ query }) {
  const { permalink } = query;
  const product = await getProductBySlug({ slug: permalink });
  return {
    props: {
      content: product.data[0],
    },
  };
}

export default Product;
