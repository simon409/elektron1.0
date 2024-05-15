import SEO from '@/sections/SEO';
import getHomeData from '@/utils/homeApis';
import Image from 'next/image';
import React, { Suspense } from 'react'

const Hero = ({homeData}) => {
    // Accessing title only when heroData is available
    const title = homeData ? homeData.attributes.title : '';
    const description = homeData ? homeData.attributes.description[0].children[0].text : '';
    const imageUrl = homeData ? homeData.attributes.image.data.attributes.url : '';
    const productSlug = homeData ? homeData.attributes.product.data.attributes.slug : '';

  {/*Hero Sections */}
  return (
        // Render the data once it is available
        <div className='pt-24 relative'>
                <Suspense fallback={<div>Loading ...</div>}>
                    <SEO title={title} description={description} image={imageUrl}/>
                    <Image priority={false} src={imageUrl} className="rounded-lg" alt='Picture of the author' width={1920} height={1080} />
                    <div className='absolute left-0 top-1/2 -translate-y-1/2 w-1/2 flex flex-col gap-10'>
                        <h1 className='text-5xl font-bold'>{title}</h1>
                        <p className='text-xl'>
                        {description}
                        </p>
                        <a
                        className='px-5 py-2 rounded-full border-2 border-black text-black w-fit bg-white hover:bg-gray-100 transition-colors duration-300 ease-in-out'
                        href={`/product/${productSlug}`}
                        >
                        Shop Now
                        </a>
                    </div>
                </Suspense>
        </div>

  )
}

export default Hero;