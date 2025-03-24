import React from 'react'
import Button from './Button'
function PackagingBanner({
  bgImage,
  title,
  subTitle
}) {
  return (
    
    <div className='max-w-[1200px] my-2 mt-5 mx-auto rounded-[8px] h-[300px] p-5 bg-[#00000084] bg-cover bg-no-repeat bg-blend-multiply' style={{backgroundImage:`url(${bgImage})`}}>
     <div className='flex flex-col justify-center items-center h-[300px]'>
     <h6 className='text-center text-[14px] text-[#E97900] font-semibold' >{title}</h6>
      <p className='md:text-[38px] text-[25px] font-semibold text-center text-[#fff]' >{subTitle}</p>
      <Button className='bg-[#4440E6] mt-4 text-white' label={"Order Kraft Packaging"}/>
      </div>
      </div>
   
      
  
  )
}

export default PackagingBanner
