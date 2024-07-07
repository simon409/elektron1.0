import Button from '@/sections/Button';
import { addItem } from '@/store/cartSlice';
import { getRating } from '@/utils/productsApis';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiCart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

const ProductCard = ({ name, price, discount, slug, finalPrice, imageUrl, id }) => {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRating();
  }, []);

  const fetchRating = async () => {
    const res = await getRating({ productId: id });
    const ratings = res.data;
    const totalRating = ratings.reduce((acc, rating) => acc + rating.attributes.rating, 0);
    setRating(totalRating / ratings.length || 0);
  };

  const handleAddToCart = () => {
    alert('Item added to cart')
    const item = { productId: id, quantity: 1 };
    dispatch(addItem(item));
  };

  return (
    <div key={id} className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link href={`product/${slug}`}>
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl bg-slate-100">
          <img className="object-cover mx-auto my-5" src={imageUrl} alt={name} />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{discount}% OFF</span>
        </div>
      </Link>
      <div className="mt-4 px-5">
        <h5 className="text-xl tracking-tight text-slate-900 font-bold">{name.length > 26 ? `${name.substring(0, 26)}...` : name}</h5>
        <div className="mt-2 flex flex-col">
          <div className="flex items-center ml-auto">
            {[...Array(5)].map((_, index) => (
              <svg key={index} aria-hidden="true" className={`h-5 w-5 ${index < Math.floor(rating) ? 'text-yellow-300' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rating}</span>
          </div>
          <p className='flex gap-2 items-baseline'>
            <span className="text-3xl font-bold text-slate-900">${finalPrice.toFixed(2)}</span>
            <span className="text-sm text-slate-900 line-through">${price.toFixed(2)}</span>
          </p>
        </div>
      </div>
      <div className="mt-4 px-5 pb-5">
        <Button onclick={()=>handleAddToCart()} Icon={BiCart} content="Add to Cart" bgcolor="black" textcolor="white" focusbgcolor="slate-500" />
      </div>
    </div>
  );
};

export default ProductCard;