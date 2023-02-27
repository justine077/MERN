import React from 'react'
import BannerSlider from '../components/BannerSlider'
import Discount from '../components/Discount'
import Fashion from '../components/Fashion'
import Features from '../components/Features'
import Footer from '../components/footer/Footer'
import Hero from '../components/Hero'
import NewsLetter from '../components/NewsLetter'
import NewProducts from '../components/products/NewProducts'
// import ProductDetails from '../components/products/ProductDetails'
import Trends from '../components/Trends'

const Home = () => {
  return (
    <div>
      <Hero />
      <NewProducts />
      <BannerSlider />
      <Trends />
      <Discount />
      <Features />
      <Fashion />
      <NewsLetter />
      <Footer/>
      
    </div>
  )
}

export default Home
