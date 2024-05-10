import React from 'react'
import Testimonials from './Testimonials';

const LeftSide = () => {
    const testimonials = [
        {
            quote: '“The best tech store I have ever visited. The customer service is top-notch and the products are of the highest quality. I will definitely be coming back for more!”',
            author: 'John Doe',
        },
        {
            quote: '“I am so happy with my purchase! The delivery was super fast and the product is exactly what I wanted. I will definitely be recommending this store to all my friends.”',
            author: 'Mohamed Addar',
        },
        {
            quote: '“I am a tech enthusiast and this store is a dream come true! The range of products is amazing and the prices are unbeatable. I will definitely be a repeat customer.”',
            author: 'Yahia Kasdi',
        },
        {
            quote: '“I love this store! The staff are so friendly and helpful and the products are top quality. I will definitely be back for more gadgets and accessories.”',
            author: 'Achraf Haidara',
        },
        {
            quote: '“I am so impressed with this store! The selection of products is fantastic and the prices are very competitive. I will definitely be recommending this store to all my friends.”',
            author: 'Sara Smith',
        },
    ];
  return (
        <div className='h-full w-full rounded-lg bg-[#F2F4F8]'>
            <div className='h-full </div>w-full flex flex-col justify-between p-10'>
                <div>
                    <img src="/assets/logo-black.svg" className='w-1/3' alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl text-black font-bold'>
                        Welcome to Our Tech Emporium!
                    </h1>
                    <p className='text-xl text-black font-semibold'>
                        Get ready to unlock the future with cutting-edge technology. Sign in to explore our latest gadgets, enjoy exclusive deals, and elevate your tech game today!
                    </p>
                </div>
                <div>
                    <Testimonials testimonials={testimonials}/>
                </div>
            </div>
        </div>
  )
}

export default LeftSide