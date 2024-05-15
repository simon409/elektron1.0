import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BiCart, BiSearch, BiCartAdd, BiCartAlt } from 'react-icons/bi'

const Header = () => {
    const [isCartFull, setisCartFull] = useState(false)
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
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <BiSearch/>
                    </div>
                    <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search ..." />
                </div>
                <div className='relative'>
                    <button className='bg-gray-100 text-black px-3 py-3 rounded-lg text-xl'><BiCartAlt/></button>
                    {
                        isCartFull && <span className='absolute top-1 right-2 bg-red-500 text-white rounded-full px-[3px] py-[3px]'></span>
                    }
                </div>
                <div className='w-[1px] bg-slate-300 my-1'></div>
                    <a href='/auth/login-signup' className='bg-black text-white px-5 py-2 rounded-lg'>Sign In</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header