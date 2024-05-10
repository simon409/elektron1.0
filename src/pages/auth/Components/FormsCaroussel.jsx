import React, { useState } from 'react';

const FormCarousel = ({ children, currentIndex }) => {
    return (
        <div className="relative m-auto w-full overflow-hidden">
            <div className={`flex transition-transform duration-500 ease-in-out transform `} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {children.map((child, index) => (
                    <div key={index} className={`flex-shrink-0 w-full ${currentIndex === index ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormCarousel;
