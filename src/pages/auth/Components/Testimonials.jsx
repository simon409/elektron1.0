import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';

const Testimonials = ({testimonials}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState();

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[Autoplay({ delay: 5000 })]}
      className="w-full h-[200px]"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 h-full">
              <Card>
                <CardContent className="flex flex-col relative justify-center gap-2 p-6 w-full h-full text-white bg-opacity-30 rounded-lg">
                    <div className='absolute -top-1'>
                        <BiSolidQuoteAltLeft className="text-4xl text-slate-50 opacity-40" />
                    </div>
                  <span className="text-xl">
                    {testimonials[index].quote}
                  </span>
                  <span className='text-start text-slate-50'>
                    {testimonials[index].author}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentIndex ? 'bg-[#2A4193]' : 'bg-[#C0C2C9]'
            } transition-all duration-300 ease-in-out `}
            onClick={() => api.scrollTo(index)}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default Testimonials;
