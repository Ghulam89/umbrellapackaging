import React from 'react'
import p1  from '../../assets/images/p-1.webp'
import p2  from '../../assets/images/p-2.webp'
import PortfolioCard from './PortfolioCard'
import p3 from '../../assets/images/p-3.webp'
import p4 from '../../assets/images/p-4.webp'
import p5 from '../../assets/images/p-5.webp'

function Portfolio() {

    const portfolioData = [
        {img1:p1,img2:p2 },
        {img1:p3,img2:p3 },
        {img1:p4,img2:p5 },

        
    ]
  return (
    <div className='max-w-[1200px] mx-auto mt-10'>

        <div className='bg-[#2E2D2D] rounded-[8px] p-5 h-[230px] flex flex-col justify-center items-center space-y-5 m-2'>
        <h5 className='md:text-[43px] flex gap-2 items-center text-[30px] text-white font-semibold leading-10 text-center'>Our
        <h5 className='md:text-[43px] text-[30px] text-[#ff931e]'> Portfolio</h5></h5>
        <h5 className='text-white text-[17px] capitalize text-center'>
        Our portfolio highlights a range of custom packaging solutions, designed to protect, promote, and enhance your products with style.
        </h5>


        </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-5 m-2'>
            {portfolioData.map((data,index)=>{
                return <PortfolioCard img1={data.img1} img2={data.img2}/>
            })}

        </div>
      
      
    </div>
  )
}

export default Portfolio
