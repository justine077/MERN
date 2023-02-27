import React from 'react'
import ProductCard from './ProductCard';

const NewProducts = () => {
  return (
    <div className='w-full bg-[#E4E4E7] py-12 px-4 text-gray-600 overflow-x-hidden '>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 md:grid-cols-3 md:mt-[-40px] xss:mt-[-0px]'>
        <h1 className='lg:text-3xl uppercase lg:text-start md:text-center sm:text-[1.3rem] w-full  text-center  xs:text-center xs:text-[1.3rem] xs:w-full'>New Products</h1>
        <div className='flex text-gray-600'>
           <ul className='xl:text-[1.3rem] lg:flex flex justify-center items-center lg:justify-end lg:w-full lg:items-center  lg:m-auto lg:text-[.9rem] md:flex md:col-span-2 md:w-fit md:m-auto md:px-8 md:ml-[2px] lg:px-0 sm:text-[13px] mx-auto mt-3 xs:text-[13px] xs:m-auto xs:mt-3 xss:text-[11px] xss:m-auto xss:mt-3 xxs:w-full'>
            <li className='lg:px-4 md:px-3 px-[8px] xxs:px-[9px] xs:px-[5px] xss:px-[4px]'>All</li>
            <li className='lg:px-4 md:px-3 px-[8px] xxs:px-[9px] xs:px-[5px] xss:px-[4px]'>Women's</li>
            <li className='lg:px-4 md:px-3 px-[8px] xxs:px-[9px] xs:px-[5px] xss:px-[4px]'>Men's</li>
            <li className='lg:px-4 md:px-3 px-[8px] xxs:px-[9px] xs:px-[5px] xss:px-[4px]'>Kid's</li>
            <li className='lg:px-4 md:px-3 px-[8px] xxs:px-[9px] xs:px-[5px] xss:px-[4px]'>Cosmetics</li>
            <li className='lg:px-4 md:px-3 px-[8px] xxs:px-[9px] xs:px-[5px] xss:px-[4px]'> Accessories</li>
           </ul>
        </div>   
      </div>
      <ProductCard/>
    </div>
  )
}

export default NewProducts
