import React from 'react'
import Blog from '../../components/blog/Blog'
import PackagingBanner from '../../components/common/PackagingBanner'
import CustomBoxMaterial from '../../components/CustomBoxMaterial/CustomBoxMaterial'
import CustomerReviews from '../../components/CustomerReviews'
import CustomPackaging from '../../components/customPackaging'
import CustomPackagingApart from '../../components/CustomPackagingApart/CustomPackagingApart'
import CustomPackagingProduced from '../../components/CustomPackagingProduced'
import FAQ from '../../components/FAQ/FAQ'
import GetPriceQuote from '../../components/GetPriceQuote/GetPriceQuote'
import Hero from '../../components/Hero'
import ImportanceCustomPackaging from '../../components/ImportanceCustomPackaging'
import InspirationPackaging from '../../components/InspirationPackaging'
import ProductionUnits from '../../components/ProductionUnits/ProductionUnits'
import SpecialPackaging from '../../components/SpecialPackaging/SpecialPackaging'
import TemplateToDesign from '../../components/TemplateToDesign/TemplateToDesign'
import WeFulfil from '../../components/WeFulfil/WeFulfil'
const Home = () => {
  return (
   <>

   
     
      <Hero/>
      <CustomPackaging/>
      <CustomBoxMaterial/>
      <GetPriceQuote/>
      <SpecialPackaging/>
      <CustomPackagingApart/>
      <TemplateToDesign/>
      <ProductionUnits/>
      <CustomPackagingProduced/>
      <PackagingBanner title={'Order Kraft Packaging For Sustainable Future.'} subTitle={"Go Green with Umbrella Custom Packaging Go For Kraft Packaging"} bgImage="https://umbrellapackaging.com/wp-content/uploads/2024/01/f2.webp"  />
      <WeFulfil/>
      <CustomerReviews/>
      <InspirationPackaging/>
      <ImportanceCustomPackaging/>
      <Blog/>
      <FAQ/>
    
   </>
  )
}

export default Home