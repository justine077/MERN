import React from 'react';
import { fashion } from '../data';


const Fashion = () => {
  return (
    <div className='w-full pb-12 bg-[#E4E4E7]  mx-auto'>

          <div className='mx-auto grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 xxs:grid-cols-1 xss:grid-cols-1  py-5'>
            {fashion.map((item) => (
                <div key={item.id} className='w-full flex rounded-lg hover:scale-105 duration-300  '>
                  
                <div className='flex w-full'>
                    <img className="w-full h-[320px]" src={item.image} alt="/" />
                </div>
                {/* <div className='py-0 text-gray-600 '>
                    <h6 className='py-1'>Chain bucket bag</h6>
                    <p></p>
                    
                </div>   */}
            </div>  
              ))}
        </div> 
                   
       
    
    </div>
  )
}

export default Fashion
