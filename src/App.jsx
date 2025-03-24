import './App.css'
import PackagingBanner from './components/common/PackagingBanner'
import CustomBoxMaterial from './components/CustomBoxMaterial/CustomBoxMaterial'
import CustomPackaging from './components/customPackaging'
import CustomPackagingApart from './components/CustomPackagingApart/CustomPackagingApart'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import GetPriceQuote from './components/GetPriceQuote/GetPriceQuote'
import Navbar from './components/Header/Navbar'
import TopNav from './components/Header/TopNav'
import Hero from './components/Hero'
import InspirationPackaging from './components/InspirationPackaging'
import ProductionUnits from './components/ProductionUnits/ProductionUnits'
import SpecialPackaging from './components/SpecialPackaging/SpecialPackaging'
import TemplateToDesign from './components/TemplateToDesign/TemplateToDesign'
import WeFulfil from './components/WeFulfil/WeFulfil'
function App() {
  return (
    <>
      <TopNav/>
      <Navbar/>
      <Hero/>
      <CustomPackaging/>
      <CustomBoxMaterial/>
      <GetPriceQuote/>
      <SpecialPackaging/>
      <CustomPackagingApart/>
      <TemplateToDesign/>
      <ProductionUnits/>
      <WeFulfil/>
      <PackagingBanner title={'Order Kraft Packaging For Sustainable Future.'} subTitle={"Go Green with Umbrella Custom Packaging Go For Kraft Packaging"} bgImage="https://umbrellapackaging.com/wp-content/uploads/2024/01/f2.webp"  />
      <InspirationPackaging/>
      <FAQ/>
      <Footer/>

    </>
  )
}

export default App
