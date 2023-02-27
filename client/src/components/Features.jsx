import React from 'react'
import { AiFillCar } from 'react-icons/ai';
import { FaMoneyBillAlt , FaHeadphonesAlt} from "react-icons/fa";
import { MdSupport } from "react-icons/md";


const Features = () => {
  return (
   <div className='w-full px-4 bg-[#E4E4E7] pb-5'>
          
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 xxs:grid-cols-1 xss:grid-cols-1 gap-8 py-5'>
              <div className='w-full flex justify-center gap-5 items-center rounded-lg hover:scale-105 duration-300'>
                <div className='text-center py-8'>
                      <AiFillCar size={50} className='text-[#ca1515]' />
                </div>
                <div>
                      <h6 className='text-[16px]'>Free Shipping</h6>
                      <p className='text-[#666666] text-[14px]'>For all oder over $99</p>
                </div>
              </div> 
              <div className='w-full flex justify-center items-center gap-5 rounded-lg hover:scale-105 duration-300'>
                <div className='text-center py-4'>
                    <FaMoneyBillAlt size={50} className='text-[#ca1515]' />
                  </div>
                   <div>
                      <h6 className='text-[16px]'>Money Back Guarantee</h6>
                      <p className='text-[#666666] text-[14px]'>If good have Problems</p>
                </div>
              </div> 
              <div className='w-full flex justify-center items-center gap-5 rounded-lg hover:scale-105 duration-300'>
                <div className='text-center py-4'>
                    <MdSupport size={50} className='text-[#ca1515]' />
                  </div>
                   <div>
                      <h6 className='text-[16px]'>Online Support 24/7</h6>
                      <p className='text-[#666666] text-[14px]'>Dedicated support</p>
                </div>
              </div> 
              <div className='w-full flex justify-center items-center gap-5 rounded-lg hover:scale-105 duration-300'>
                <div className='text-center py-4'>
                    <FaHeadphonesAlt size={50} className='text-[#ca1515]' />
                  </div>
                   <div>
                      <h6 className='text-[16px]'>Money Back Guarantee</h6>
                      <p className='text-[#666666] text-[14px]'>If good have Problems</p>
                </div>
              </div> 
        </div> 
                   
       
    
    </div>
  )
}

export default Features
