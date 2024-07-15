import React, { useEffect, useState } from 'react';
import Countdown from './utils/CountDown';
import Image from 'next/image';

const LimitedOffer = ({ limitedOfferData }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(limitedOfferData.attributes);
  }, [limitedOfferData]);

  return (
    <div className="py-10 bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg shadow-xl text-white relative">
        <div className='absolute bottom-5 right-5'>
            <Image src="/assets/images/offer.png" className="opacity-30" width={500} height={500}/>
        </div>
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        <p className="text-lg mb-6 font-semibold">{data.description}</p>
        <Countdown finishDate={data.timeLimit} />
        <p className="text-lg mt-4 mb-8 font-semibold">{data.callToAction}</p>
        <a
          href="#"
          className="inline-block px-6 py-3 text-lg bg-white text-gray-800 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default LimitedOffer;
