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
import { ToastContainer } from 'react-toastify'
import SingleBlog from './screens/blogs/SingleBlog'
import AboutUs from './screens/AboutUs'
import Reviews from './screens/reviews'
import GetCustomQoutePage from './screens/getCustomQuote/GetCustomQoutePage'
import TargetPrice from './screens/targetPrice'
import Dielines from './screens/Dielines'
function App() {
  const { pathname } = useLocation();
      useEffect(() => {
          window.scrollTo(0, 0);
      }, [pathname]);
   
  return (
    <>
    <ToastContainer/>
     <TopNav/>
     <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/main-category/:id' element={<MainCategoryProducts key={window.location.pathname}  />} />
      <Route  path='/category/:id' element={<CategoryProducts  key={window.location.pathname} /> } />
      <Route  path='/product/:id' element={<ProductDetails/>} />
      <Route  path='/shop' element={<Shop/>} />
      <Route  path='/contact-us' element={<ContactUs/>} />
      <Route  path='/about-us' element={<AboutUs/>} />
      <Route  path='/portfolio' element={<Portfolio/>} />
      <Route  path='/privacy-policy' element={<PrivacyPolicy/>} />
      <Route  path='/shipping-policy' element={<ShippingPolicy/>} />
      <Route  path='/termsandconditions' element={<TermsAndConditions/>} /> 
      <Route  path='/cart' element={<Cart/>} /> 
      <Route  path='/reviews' element={<Reviews/>} /> 
      <Route  path='/checkout' element={<Checkout/>} /> 
      <Route  path='/get-custom-quote' element={<GetCustomQoutePage/>} /> 
      <Route  path='/target-price' element={<TargetPrice/>} /> 
      <Route  path='/dielines' element={<Dielines/>} /> 
      <Route  path='/blogs' element={<Blogs/>} /> 
      <Route  path='/blogs/:id' element={<SingleBlog/>} /> 
    </Routes>
    <Footer/>
    </>
  )
}

export default App
