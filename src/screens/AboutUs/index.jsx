import React, { useState } from 'react'
import banner from '../../assets/banner.jpg'
import { IoPlayCircleOutline } from "react-icons/io5";
import map from '../../assets/map-01.png'
// import VideoPopup from './videoPopup';

function AboutUs() {
  const [showModel,setShowModel] = useState(false)
  console.log(showModel,"Video Popup");
  return (
    <div className='max-w-[1200px] mt-5 mx-auto text-center  rounded-[8px] p-5'>
    <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
      
      <div className=' flex items-center justify-center h-[300px] bg-cover bg-no-repeat rounded-[8px] relative' style={{backgroundImage: `url(${banner})`}}>
        <div className='  p-2 rounded-full bg-[#5a56e9]' onClick={()=>setShowModel(true)}><IoPlayCircleOutline size={50} color='#fff' />
       
        </div>
        {/* {showModel && <VideoPopup onClose={()=>setShowModel(false)}/>} */}
        

      </div>


      <div className='flex flex-col items-start justify-center space-y-2  '>
        <hr className='text-[#000]  md:w-120 w-80 border ' />
      <h2 className='md:text-[36px] text-[25px] font-semibold text-start '>Umbrella Custom Packaging</h2>
      <p className='text-[#333333] md:text-[16px] text-[14px] text-left'>Umbrella Custom Packaging offers customized printing and packaging solutions for all your business needs. We have technologically advanced digital and offset presses. It ensures that every packaging box we print has supreme quality. Our accomplished designers provide amazing artwork choices for all kinds of boxes. We don’t charge our valued customers for design preparation</p>
      <div className='flex gap-5  '>
      
      </div>
      </div>

     
      

    </div>

    <div className='mt-5'>
        <p className='text-left text-[16px] tracking-wide leading-6 '>The production team is very efficient which helps us in completing every task in minimum time span. Timely printing and shipment are the core values of our company. Umbrella Custom Packaging takes pride in delivering the best solution at reasonable price. Cardboard boxes, Kraft boxes, corrugated boxes, window boxes, die cut boxes and wedding boxes come under our range of expertise. From these box types, we accept the responsibility to manufacture spectacular packaging for electronics, food items, toys, cosmetics, etc. You name it and we have it. Umbrella Custom Packaging is a specialist in producing catchy customizations. Die cut, embossing, perforations, laminations, UV, glossy, matte and several other options are available for the designing of your customized packaging boxes. We use environment and consumer friendly stocks for manufacturing the boxes without compromising on excellence. Our competent work force enables us presenting impeccable printed designs and styles.<br/><br/>

Umbrella Custom Packaging has been catering the packaging needs of thousands of businesses across the globe. We have achieved a magnanimous success in short period of time due to our premium printing services, fastest turnaround, free shipping and unique customized designing. Umbrella Custom Packaging is helping many macro and mini businesses in their packaging needs. For specific events, we offer exciting favor and gift boxes with special discounts. Customer satisfaction is our top priority. To facilitate the customers by cutting down their expenses, we not only print at our in-house press in USA but also utilize the offshore printing facilities in Asia and Africa. We look forward to hear from your business in the near future. Our customer care services are available around the clock. For custom quote or inquiry, feel free to contact our representatives from Monday-Friday.</p>
      </div>
      <div className='bg-[#F4ECFB] rounded-[8px] mt-8'>
      <div className='grid md:grid-cols-2 grid-cols-1 space-y-2 '>
        <div className='' >
            <img src={map} alt=""  className='w-full'/>


             </div>
        <div className=' flex flex-col justify-center items-center  gap-5'>
            <div className='flex text-white gap-5 '>
                <div className='bg-[#5a56e9]  rounded-[8px] flex flex-col items-start p-2.5 space-y-5'>
                    <h1 className='text-[32px]'>5+</h1>
                    <p className='text-[14px]'>Head Quarter on Global Family</p>
                    </div>
                <div className='bg-[#5a56e9]  rounded-[8px] flex flex-col items-start p-2.5 space-y-5'>
                    <h1 className='text-[32px]'>1000+</h1>
                    <p className='text-[14px]'>Satisfied Customers All Over the Globe </p>
                    </div>
                <div></div>

            </div>
            </div>
    
        
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 '>
        <div className='  flex flex-col justify-center items-start p-2.5 space-y-5 md:border-r-1 border-0'>
                    <h1 className='text-[32px]'>USA</h1>
                    <p className='text-[14px] text-start'>9854 National Blvd #1042, Los Angeles, CA 90034, United States</p>
                    </div>
                    <div className='  flex flex-col items-start p-2.5 space-y-5 md:border-r-1 border-0'>
                    <h1 className='text-[32px]'>Uk</h1>
                    <p className='text-[14px] text-start'>275 New North Road Islington Suite 1946 London, N1 7AA United Kingdom</p>
                    </div>
                    <div className='  flex flex-col items-start p-2.5 space-y-5'>
                    <h1 className='text-[32px]'>Canada</h1>
                    <p className='text-[14px] text-start'>7398 Yonge St #6d, Thornhill, ON L4J 8J2, Canada </p>
                    </div>

      </div>
      </div>




   </div>
  )
}

export default AboutUs
