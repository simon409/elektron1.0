import React, { useState } from 'react';
import LeftSide from './Components/LeftSide';
import FormCarousel from './Components/FormsCaroussel';
import SignUpForm from './Components/SignUpForm';
import LoginForm from './Components/loginForm';

const LoginSignUp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
    };

    const children = [<LoginForm onclick={handleNext}/>, <SignUpForm onclick={handlePrev}/>];
    return (
        <div className='w-screen h-screen flex' style={{
            backgroundImage: `url('/assets/images/loginImage.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className='w-full h-full absolute bg-black opacity-30'></div>
            <div className='w-1/3 relative p-4'>
                <LeftSide />
            </div>
            <div className='w-2/3 h-full p-4 flex z-10'>
                <FormCarousel className="w-full" children={children} currentIndex={currentIndex}/>
            </div>
        </div>
    );
};

export default LoginSignUp;