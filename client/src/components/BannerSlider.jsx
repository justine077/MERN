import React, { Component } from "react";
import Slider from "react-slick";
import '../index.css';

const BannerSlider = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className="max-w-[1440px] py-12 px-4 h-[500px] bg-cover bg-no-repeat bg-center w-full flex mx-auto bg-url[ bg-[url('./assets/banner-bg.webp')]">
      
          <div className="container flex justify-center items center mx-auto w-[600px]">
              <div className="flex justify-center items-center ">
         <Slider className="text-center text-black flex items-center justify-center  w-[600px]" {...settings}>
            
          <div className=" text-black">
                <h3 className=" uppercase py-5 text-[20px] font-thin font-[cookie] text-[#ca1515] tracking-wider">The Chloe Collection</h3>
                <h1 className="text-7xl font-[cursive] font-medium py-6 tracking-wider">The Project Jacket</h1>
                <div className="py-5">
                    <button className="text-sm font-medium border-b-2 border-red-400">
                    SHOP NOW
                </button>
                </div>
          </div>
          <div className=" text-black">
            <h3 className=" uppercase py-5 text-[20px] font-thin font-[cookie] text-[#ca1515] tracking-wider">The Chloe Collection</h3>
                <h1 className="text-7xl font-[cursive] font-medium py-6 tracking-wider">The Project Jacket</h1>
                <div className="py-5">
                    <button className="text-sm font-medium border-b-2 border-red-400">
                    SHOP NOW
                </button>
                </div>
          </div>
          <div className=" text-black">
            <h3 className=" uppercase py-5 text-[20px] font-thin font-[cookie] text-[#ca1515] tracking-wider">The Chloe Collection</h3>
                <h1 className="text-7xl font-[cursive] font-medium py-6 tracking-wider">The Project Jacket</h1>
                <div className="py-5">
                    <button className="text-sm font-medium border-b-2 border-red-400">
                    SHOP NOW
                </button>
                </div>
          </div>
          
        </Slider>
      </div>
        </div>
      </div>

  )
}

export default BannerSlider
