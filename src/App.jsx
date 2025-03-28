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
    </Routes>
    <Footer/>
    </>
  )
}

export default App
