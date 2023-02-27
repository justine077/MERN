import React from 'react'
import { Link } from 'react-router-dom';
import payment1 from '../../assets/payment-1.webp'
import payment2 from '../../assets/payment-2.webp'
import payment3 from '../../assets/payment-3.webp'
import payment4 from '../../assets/payment-4.webp'
import payment5 from '../../assets/payment-5.webp'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGitSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
  return ( 
    <footer className="text-[#11111]">
        <div className="container px-6 py-12 mx-auto">
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
                <p className="font-semibold text-[#11111] dark:text-[#11111] text-2xl">LINNTECT</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.</p>
                 <div className='flex justify-between gap-4 pt-5'>
                    <img src={payment1} alt="/" />
                    <img src={payment2} alt="/" />
                    <img src={payment3} alt="/" />
                    <img src={payment4} alt="/" />
                    <img src={payment5} alt="/" />
                </div>
                </div>
            </div>

            <div className='lg:pl-12'>
                <h2 className="font-semibold text-[#11111] dark:text-[#11111]">Quick Link</h2>

                <div className="flex flex-col items-start mt-5 space-y-2 ">
                    <Link to='/' className="text-[#11111] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">About</Link>
                    <Link to='/' className="text-[#11111] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Blogs</Link>
                    <Link to='/' className="text-[#11111] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Contact</Link>
                    <Link to='/' className="text-[#11111] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">FAQ</Link>
                </div>
            </div>

            <div>
                <h2 className="font-semibold text-[#11111] dark:text-[#11111]">ACCOUNT</h2>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <Link to='/' className="text-[#11111] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">My Account</Link>
                    <Link to='/' className="text-[#11111] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Orders Tracking</Link>
                    <Link to='/' className="text-[#11111] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Checkout</Link>
                    <Link to='/' className="text-[#11111] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Wishlist</Link>
                </div>
            </div>

            <div>
                <p className="font-semibold text-[#11111] dark:text-[#11111]">Contact Us</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <Link to='/' className="text-[#11111] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">+880 768 473 4978</Link>
                    <Link to='/' className="text-[#11111] transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Linntect@gmail.com</Link>
                </div>
                <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30}/>
                <FaGitSquare size={30} />
                <FaDribbbleSquare size={30}/>
            </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>
        
        <div className="flex flex-col items-center justify-center sm:flex-row text-center mx-auto">
            <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>
        </div>
    </div>
</footer>
  )
}

export default Footer
