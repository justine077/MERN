import React from 'react'
import mainBanner1 from '../assets/mainBanner1.webp';
import mainBanner2 from '../assets/mainBanner2.webp';
import mainBanner3 from '../assets/mainBanner3.webp';
import mainBanner4 from '../assets/mainBanner4.webp';
import mainBanner5 from '../assets/mainBanner5.webp';
const Hero = () => {
  return (
    <div className="max-w-[1440] py-16 px-4 mx-auto text-3xl text-black bg-zinc-200 mt-12">
      <div className='grid lg:grid-cols-2 '>
        <div className="lg:py-0 md:py-3 py-3 ">
            <img className='objet-cover ' src={mainBanner1} alt="" />
            <div className='xl:max-w-[480px] xl:mt-0  xl:top-[20%] xl:left-[5%] absolute lg:top-[20%]  lg:left-[4%]  md:top-[50%] md:left-[6%]  top-[40%] left-[10%] xs:top-[28%] xss:top-[26%]'>
            <h1 className='font-[cursive] xl:mt-[30%] xl:mb-[.5rem]  xl:text-6xl lg:mb-[.5rem] md:mb-[1.5rem] lg:text-4xl md:text-6xl font-medium md:py-3 text-3xl xs:text-2xl xss:text-[23px]'>Women’s fashion</h1>
            <div className=''>
              <p className='font-[sans] text-[#666666] mx-auto pt-6 leading-4 xl:text-[14px] xl:py-5 xl:max-w-[395px] lg:text-1xl lg:text-[13px] lg:max-w-[305px] md:mb-[1rem] md:text-[16px] md:max-w-[450px] md:py-2 sm:text-sm sm:max-w-[350px] sm:text-1xl text-[12px] max-w-[220px] mt-[-12px] xs:mb-[.5rem] xs:text-[12px] xs:max-w-[200px] xss:text-[11px] xss:max-w-[170px] xss:mb-[-10px] font-medium'>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore  edolore magna aliquapendisse ultrices gravida.</p>
            </div>
            <div>
              <button className='font-medium xl:text-[22px] xl:px-8 xl:py-4 lg:text-[18px] bg-[#BEE2D6] lg:py-2 lg:px-4 rounded-m md:text-[18px] md:py-4 md:px-8 md:rounded-md md:mt-5 sm:text-[16px] sm:px-5 sm:py-2 sm:rounded-md sm:mt-5 text-[14px] px-4 py-1 mt-5 rounded-md xs:text-[12px] xs:px-5 xs:py-0 xss:text-[9px] xss:p-0 xss:px-4 '>SHOP NOW</button>
            </div>
            </div>
              </div>
              <div className='grid md:grid-cols-2 lg:grid-cols-  row-2 '>
                  <div className='lg:py-0 lg:p-1 md:p-2 py-3 sm:justify-center sm:items-center sm:flex'>
                    <img className='object-cover' src={mainBanner2} alt="" />
                  </div>
                  <div className='lg:py-0 lg:p-1 md:p-2 py-3 sm:justify-center sm:items-center sm:flex'>
                    <img className='object-cover' src={mainBanner3} alt="" />
                  </div>
                  <div className='lg:py-0 lg:p-1 md:p-2 py-3 lg:mt-3 sm:justify-center sm:items-center sm:flex'>
                    <img className='object-cover' src={mainBanner4} alt="" />
                  </div>
                  <div className='lg:py-0 lg:p-1 md:p-2 py-3 lg:mt-3 sm:justify-center sm:items-center sm:flex'>
                    <img className='object-cover' src={mainBanner5} alt="" />
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Hero 
