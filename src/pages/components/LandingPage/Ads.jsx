import Button from '@/sections/Button';
import React from 'react'

const Ads = ({homeAds}) => {
    const backgroundImage = homeAds ? homeAds.attributes.background_image.data.attributes.url : '';
    const title = homeAds ? homeAds.attributes.title : '';
    const description = homeAds ? homeAds.attributes.description : '';
    const slug = homeAds ? homeAds.attributes.product_id.data.attributes.slug : '';
    const product_image = homeAds ? homeAds.attributes.product_image.data.attributes.formats.small.url : '';


  return (
    <div className='flex my-10'>
        <div className='w-full'>
            <div className='h-60 flex justify-between py-10 px-24 rounded-lg' style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} >
                <div className='w-2/3'>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <p>{description}</p>
                    <a href={`/products/${slug}`} className='flex items-center w-fit justify-center rounded-lg bg-black text-center font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 gap-2 py-2 px-4 mt-5'>Shop Now</a>
                </div>
                <div className=''>
                    <img src={product_image} alt={title} className='w-50 h-40 object-cover'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ads