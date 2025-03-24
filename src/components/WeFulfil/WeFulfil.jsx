import React from 'react'
import { FaCircleNotch } from "react-icons/fa";
import IndustryStandard from '../../assets/images/Industry-standard.webp'
function WeFulfil() {
  return (
     <div className='max-w-[1200px] mt-5 mx-auto text-center  rounded-[8px] p-5'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                  
                  <div className=''>
                    
                     <img src={IndustryStandard} className=' rounded-xl' alt='' />
                  </div>


                  <div className='flex flex-col items-start justify-center space-y-5'>
                  <h2 className='font-semibold text-start'>We Fulfil the standards of the Packaging Industry.</h2>
                  <p className='text-[#333333] md:text-[14px] text-[14px] text-left'>Umbrella Custom Packaging follows strict standards, much like a recipe, ensuring each box is the right size, crafted from top-quality materials, and designed to perfection. With attention to detail and quality control, they deliver custom boxes that are both reliable and customized to your preferences.</p>
                  <div className='flex gap-5  '>
                    <div className='md:w-6/12 w-full'>
                  <div className='flex space-x-2 items-center mt-3'><FaCircleNotch /><span className='text-[16px]'>Select/provide the Box style</span></div>
                  <div className='flex space-x-2 items-center '> <FaCircleNotch /><span className='text-[16px]'>Provide the Box Dimensions/Size</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  </div>
                    <div className='md:w-6/12 w-full'>
                  <div className='flex space-x-2 items-center mt-5'><FaCircleNotch /><span className='text-[16px]'>Select/provide the Box style</span></div>
                  <div className='flex space-x-2 items-center '> <FaCircleNotch /><span className='text-[16px]'>Provide the Box Dimensions/Size</span></div>
                  <div className='flex space-x-2 items-center group '><FaCircleNotch className=' group-hover:scale-125' /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  <div className='flex space-x-2 items-center '><FaCircleNotch /><span className='text-[16px]'>Share your additional thoughts</span></div>
                  </div>
                  </div>
                  </div>
                  
    
                </div>
    
               </div>
  )
}

export default WeFulfil
