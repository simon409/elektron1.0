import { getProductBySlug, getProductsByCategory, getRating } from '@/utils/productsApis';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/productCard/ProductCard';
import ReviewCard from '../components/ReviewsCard/ReviewsCard';

const Product = ({ content }) => {
  const { attributes, id } = content;

  const [rating, setRating] = useState(0)
  const [reviews, setReviews] = useState([])
  const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        fetchRating();
        fetchRelatedProducts();
        console.log(reviews)
    }, [])

    const fetchRating = () => {
        getRating({ productId: id }).then(res => {
            const ratings = res.data; // Array of rating objects
            setReviews(ratings)
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
  const fetchRelatedProducts = () => {
    console.log(attributes.category_id.data.id)
    getProductsByCategory({ category_id: attributes.category_id.data.id }).then((res) => {
      setRelatedProducts(res.data);
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
          <div className="flex items-center my-2">
            {[...Array(5)].map((_, index) => (
                <svg key={index} aria-hidden="true" className={`h-5 w-5 ${index < Math.floor(rating) ? 'text-yellow-300' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
            ))}
            <span className="ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating.toFixed(1)}</span><span className='mx-2'>|</span> <a className="underline text-yellow-800" href='#reviews'>{reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}</a><span className='mx-2'>|</span>{attributes.quantity > 0 ? <span className='font-bold text-green-500'>In-Stock</span> : <span className='font-bold text-red-500'>out of stock</span>}
          </div>
          <div className='flex items-center'>
            <p className='text-2xl font-bold'>${attributes.finalPrice}</p>
            <p className='text-md ml-2 mr-4 line-through mt-2'>${attributes.price}</p>
          </div>
          <p className='text-lg my-2 font-bold'>Features:</p>
          <ul className='text-lg list-disc ml-5'>
            {
              attributes.features[0].children.map((feature, index) => (
                <li key={index} className='list-item'>{feature.children[0].text}</li>
              ))
            }
          </ul>
          <div className='flex items-center space-x-4 my-5'>
            <button className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart
            </button>
            <button className="flex items-center justify-center rounded-md bg-slate-200 px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart
            </button>
          </div>
          <p className='text-sm text-gray-500'>Free shipping on orders over $50</p>
        </div>
      </div>
      {/*TODO: Add a tab for description and reviews */}
      /*Related Products */
        <div className='py-10'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Related Products</h2>
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.slice(0, 4).map((product) => (
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
        {/*Reviews and comments */}
      <section id='reviews' className='py-10'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Reviews</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
          <ReviewCard />
        </div>
      </section>
    </main>
  );
};

export async function getServerSideProps({ query }) {
  const { slug } = query;
  const product = await getProductBySlug({ slug: slug });

  return {
    props: {
      content: product.data[0],
    },
  };
}

export default Product;
