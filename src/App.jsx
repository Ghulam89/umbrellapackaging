import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './screens/home'
import CategoryProducts from './screens/categoryProducts'
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'
import TopNav from './components/Header/TopNav'
import MainCategoryProducts from './screens/MainCategoryProducts'
import ProductDetails from './screens/productDetails'
import Shop from './screens/shop'
import { useEffect } from 'react'
import ContactUs from './screens/ContactUs/ContactUs'
import Portfolio from './screens/Portfolio/Portfolio'
import PrivacyPolicy from './screens/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from './screens/TermsAndConditions/TermsAndConditions'
import Cart from './screens/cart/Cart'
import Checkout from './screens/checkout/Checkout'
import Blogs from './screens/blogs/Blogs'
import ShippingPolicy from './screens/shippingPolicy/ShippingPolicy'
function App() {
  const { pathname } = useLocation();
      useEffect(() => {
          window.scrollTo(0, 0);
      }, [pathname]);

  return (
    <>
     <TopNav/>
     <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/main-category/:id' element={<MainCategoryProducts/>} />
      <Route  path='/category/:id' element={<CategoryProducts/>} />
      <Route  path='/product/:id' element={<ProductDetails/>} />
      <Route  path='/shop' element={<Shop/>} />
      <Route  path='/contact-us' element={<ContactUs/>} />
      <Route  path='/portfolio' element={<Portfolio/>} />
      <Route  path='/privacy-policy' element={<PrivacyPolicy/>} />
      <Route  path='/shipping-policy' element={<ShippingPolicy/>} />
      <Route  path='/termsandconditions' element={<TermsAndConditions/>} /> 
      <Route  path='/cart' element={<Cart/>} /> 
      <Route  path='/checkout' element={<Checkout/>} /> 
      <Route  path='/blogs' element={<Blogs/>} /> 
    </Routes>
    <Footer/>
    </>
  )
}

export default App
