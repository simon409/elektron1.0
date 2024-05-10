import React from 'react'
import { BsApple } from 'react-icons/bs'
import { SiAsus, SiDell, SiHp, SiHuawei, SiSamsung } from 'react-icons/si'

const Brands = () => {
  return (
    <div className='py-10'>
        <ul className='items-center grid grid-cols-6 place-items-center gap-5'>
            <li className='text-9xl text-gray-500'><SiSamsung /></li>
            <li className='text-5xl text-gray-500'><SiHuawei /> </li>
            <li className='text-5xl text-gray-500'><BsApple /></li>
            <li className='text-5xl text-gray-500'><SiAsus /></li>
            <li className='text-5xl text-gray-500'><SiDell /></li>
            <li className='text-5xl text-gray-500'><SiHp /></li>
        </ul>
    </div>
  )
}

export default Brands