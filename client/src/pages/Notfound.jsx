import React from 'react'
import { Link } from 'react-router-dom'
import notfound from '../assets/404.svg'
import { BiChevronLeft } from "react-icons/bi";

const Notfound = () => {
  return (
    <div className='w-full py-20 h-screen mx-auto flex justify-center items-center text-center'>
        <div>
            <img className='h-96 items-center mx-auto' src={notfound} alt="" />
            <h1 className='mb-[0.75rem] text-[3rem] font-bold leading-1'>Page not found</h1>
            <p className='mb-[1.25rem] text-[1.125rem] leading-7 text-slate-400'>Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.
            </p>
            <Link to='/' className='text-[.875rem] leading-6'>
               <button className='flex justify-between mx-auto items-center text-[.875rem] font-semibold py-[0.625rem] px-[1.25rem] mt-[12px] bg-[#1D3FAF] rounded-md text-white'><BiChevronLeft size={22}/> Go back home</button>
            </Link>
        </div>
    </div>
  )
}

export default Notfound
