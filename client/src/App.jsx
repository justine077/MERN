import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Blog from './pages/Blog';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ShoppingCart from './components/Cart/ShoppingCart';
import ProductDetails from './components/products/ProductDetails';
import Notfound from './pages/Notfound';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/shoppingcart' element={<ShoppingCart/>} />
          <Route path='/productDetails' element={<ProductDetails/>} />
          <Route path='/*' element={<Notfound/>} />
        </Routes>
     </Router>
    </div>
  )
}

export default App
