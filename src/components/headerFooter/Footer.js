import Image from 'next/image'
import React from 'react'

const Footer = () => {
const currentYear = new Date().getFullYear();

return (
    <footer className='bg-gray-100 py-10'>
            <div className='container text-black flex'>
                    {/*logo and payment methods */}
                    <div className='w-1/4'>
                            <Image width={150} height={150} src='/assets/logo-black.svg' alt='logo' />
                            <div className='flex gap-5 mt-5'>
                                    <Image width={40} height={40} src='/assets/visa.svg' alt='visa' />
                                    <Image width={40} height={40} src='/assets/mastercard.svg' alt='mastercard' />
                                    <Image width={40} height={40} src='/assets/paypal.svg' alt='paypal' />
                            </div>
                            {/*copyrights */}
                            <p className='mt-5'>&copy; {currentYear} Elektron. All rights reserved</p>
                    </div>
                    <div className='w-1/4'>
                            <h3 className='font-bold'>Company</h3>
                            <ul className='mt-5'>
                                    <li><a href='#'>About</a></li>
                                    <li><a href='#'>Products</a></li>
                                    <li><a href='#'>Features</a></li>
                                    <li><a href='#'>Contact</a></li>
                            </ul>
                    </div>
                    <div className='w-1/4'>
                            <h3 className='font-bold'>Support</h3>
                            <ul className='mt-5'>
                                    <li><a href='#'>Help Center</a></li>
                                    <li><a href='#'>Terms of Service</a></li>
                                    <li><a href='#'>Privacy Policy</a></li>
                                    <li><a href='#'>Security</a></li>
                            </ul>
                    </div>
                    <div className='w-1/4'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <div className='mt-5 flex gap-5'>
                                    <a href='#'><Image width={30} height={30} src='/assets/facebook.svg' alt='facebook' /></a>
                                    <a href='#'><Image width={30} height={30} src='/assets/X.svg' alt='twitter' /></a>
                                    <a href='#'><Image width={30} height={30} src='/assets/instagram.svg' alt='instagram' /></a>
                            </div>
                    </div>
            </div>
    </footer>
)
}

export default Footer