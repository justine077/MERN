import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Linntech.png';
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart} from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
  return (
    <div className='z-20 items-center fixed top-0 left-0 right-0"  bg-[#000300]  h-24 w-full text-white border-b border-gray-600'>
        <div className='flex justify-between items-center max-w-[1240px] h-24 mx-auto px-4'>
            <img className='object-cover h-24 w-60' src={Logo} alt="/" />
                <ul className='items-center cursor-pointer  hidden md:flex text-white'>
                    <li className='px-4 lg:px-5 md:px-2 hover:text-[#00df9a] hover:scale-100 duration-300'><Link to='/'>Home</Link></li>
                    <li className='px-4 lg:px-5 md:px-2 hover:text-[#00df9a] hover:scale-100 duration-300'> <Link to='/shop'>Shop</Link></li>
                    <li className='px-4 lg:px-5 md:px-2 hover:text-[#00df9a] hover:scale-100 duration-300'><Link to='/blog'>Blog</Link></li>
                    <li className='px-4 lg:px-5 md:px-2 hover:text-[#00df9a] hover:scale-100 duration-300'><Link to='/contact'>Contact</Link></li>
              </ul>
              <div className='hidden md:flex'>
                        <button className='lg:px-8 md:px-2 border border-gray-600 rounded-md 
                        mx-4 text-[#00df9a] hover:border-[#00df9a] hover:text-white'>
                            <Link to='/login'>Sign In</Link>
                        </button>
                        <button className='lg:px-8 md:px-2 bg-[#00df9a] text-black py-2 md:py-1
                        px-3 rounded-md hover:bg-sky-800 hover:text-white'>
                            <Link to='/signup'>Sign Up</Link>
                  </button>
                    <div className='flex justify-center items-center'>
                        <Link className='px-1'><AiOutlineSearch size={20} /></Link>
                        <Link className='px-1'><AiOutlineHeart size={20} /></Link>
                        <Link to='/shoppingcart' className='px-1'><AiOutlineShoppingCart size={20} /></Link>
                    </div>
                    </div>
                    <div className='md:hidden cursor-pointer' onClick={handleClick}>
                        {!nav ? <AiOutlineMenu size={20} className='text-white' /> : <AiOutlineClose size={20} className='text-white'/>}
                    </div> 
                </div>
                <ul className={!nav ? 'hidden' :
                    ' absolute items-center text-center py-3 bg-[#000300] md:hidden w-full px-8 ease-in duration-500 cursor-pointer'}>
                    <li className='py-3 border-b-2 border-gray-800 w-full 
                        hover:text-[#00df9a] hover:scale-100 duration-300'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='py-3 border-b-2 border-gray-800 w-full
                        hover:text-[#00df9a] hover:scale-100 duration-300'>
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li className='py-3 border-b-2 border-gray-800 w-full 
                        hover:text-[#00df9a] hover:scale-100 duration-300'>
                        <Link to='/about'>About</Link>
              </li>
                    <div className='flex flex-col my-4'>
                    <button className='bg-transparent border border-gray-600 text-[#00df9a] 
                        hover:text-white hover:border-[#00df9a] px-8 py-3 mb-4'>
                            <Link to='/login'>Sign In</Link>
                        </button>
                    <button className=' bg-[#00df9a] text-black py-2 px-6 rounded-md
                        hover:bg-sky-800 hover:text-white'>
                      <Link to='/signup'>Sign Up</Link> 
                  </button>
              </div>
              <div className='flex justify-center items-center'>
                        <Link className='px-2'><AiOutlineSearch size={20} /></Link>
                        <Link className='px-2'><AiOutlineHeart size={20} /></Link>
                        <Link className='px-2'><AiOutlineShoppingCart size={20} /></Link>
                    </div>
              
          </ul>
      </div>
  )
}

export default Navbar
