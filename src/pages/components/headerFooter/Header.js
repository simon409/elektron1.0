import Image from 'next/image'
import React, { useEffect } from 'react'
import { BiCart, BiSearch } from 'react-icons/bi'

const Header = () => {
    useEffect(() => {
        // Get the current URL using window.location.href
        const currentURL = window.location.href;
        console.log('Current URL:', currentURL);
      }, []);
  return (
    <div className='fixed w-screen bg-white z-50'>
        <div className="container py-5 justify-between flex items-center ">
            <div className='w-1/3'>
            <Image src='/assets/logo-black.svg' width={150} height={150} alt='logo' />
        </div>
        <div className='w-1/3 flex'>
            <ul className='flex gap-10 mx-auto'>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className='w-1/3 flex'>
            <div className='ml-auto flex gap-5'>
                <button className='bg-gray-100 text-black px-2 py-1 rounded-lg text-xl'><BiSearch/></button>
                <button className='bg-gray-100 text-black px-2 py-1 rounded-lg text-xl'><BiCart/></button>
                <div className='w-[1px] bg-slate-300 my-1'></div>
                <a href='/login' className='bg-black text-white px-5 py-2 rounded-lg'>Sign In</a>
            </div>
        </div></div>

    </div>
  )
}

export default Header