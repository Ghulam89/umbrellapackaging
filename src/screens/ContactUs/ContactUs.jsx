import React from 'react'
import bg from '../../assets/images/bg-contact.png';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
function ContactUs() {
  return (
    <>
    <div className=' h-auto bg-no-repeat bg-cover    py-5' style={{backgroundImage: `url(${bg})`}}>
    <div className='max-w-[1200px] mx-auto'>

    <div>
  <div className='max-w-[800px] max-h-[626] mx-auto md:p-[50px] p-[20px] rounded-[8px] mt-10 shadow-md bg-white bg-opacity-40 border border-gray-100'>
    <div className='flex flex-col justify-around items-center space-y-8'>
      <h2 className='md:text-[40px] text-[30px] font-semibold text-start'>Get In Touch</h2>
      <p className='text-[#777777] md:text-[14px] text-[13px] text-center'>
        Umbrella Custom Packaging-The House of Proficient Printing & Distinct Featured Boxes. 
        Umbrella Custom Packaging facilitates your business by providing innovative styled boxes 
        in extraordinary design. We use the finest paper material and high quality cardboard to 
        ensure perfect Die Cut boxes. You will get guaranteed satisfaction with high quality printing. 
        Email Us With Any Questions or Inquires or Call Us. We would be happy to answer your questions 
        and set up a meeting with you.
      </p>
    </div>

    <form action="" method="get">
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
        <Input
          placeholder='Name'
          className='border w-full rounded-lg border-gray-300 focus:border-[#4440E6] focus:ring-1 focus:ring-[#4440E6] p-2'
        />
        <Input
          type='email'
          placeholder='Email'
          className='border w-full rounded-lg border-gray-300 focus:border-[#4440E6] focus:ring-1 focus:ring-[#4440E6] p-2'
        />
        <Input 
          placeholder='Phone Number'                       
          className='border w-full rounded-lg border-gray-300 focus:border-[#4440E6] focus:ring-1 focus:ring-[#4440E6] p-2'                    
        />
        <Input 
          placeholder='Company Name'                       
          className='border w-full rounded-lg border-gray-300 focus:border-[#4440E6] focus:ring-1 focus:ring-[#4440E6] p-2'                    
        />
        <Input
          type='file'
          className='border w-full rounded-lg border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#4440E6] file:text-white hover:file:bg-[#3a36c7]'
        />
      </div>
      
      <div className='mt-5'>
        <textarea 
          placeholder="Please share specific packaging details such as dimensions, materials, weight limits, and design preferences, We'll promptly provide you with a quote" 
          rows={3} 
          className='border w-full p-2 rounded-lg border-gray-300 focus:border-[#4440E6] focus:ring-1 focus:ring-[#4440E6]'
        />
        <Button 
          label={"Send"} 
          className='bg-[#4440E6] hover:bg-[#3a36c7] w-full text-white mt-4 py-2 rounded-lg transition-colors duration-200' 
        />
      </div>
    </form>
  </div>
</div>

       
      
    </div>
    </div>
    <div className='max-w-[1200px] mx-auto mt-10'>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 bg-[#5a56e9] p-5 rounded-[8px]'>
            <div className='grid grid-cols-1'>
                <div className='bg-[#fff] flex justify-center sm:flex-row flex-col items-center rounded-[8px] p-2 gap-10 '>
                <div className='text-white flex justify-center items-center p-3  bg-[#5a56e9] rounded-full'>
                    <IoCallOutline size={40}/>
                    </div>
                <div className='flex flex-col  justify-between '>
                   <h5 className='text-3xl font-semibold'>Call Now</h5> 
                    <p>+1 747-247-0456</p>
                    </div>
                    </div>
                </div>
            
            <div className='grid grid-cols-1'>
                <div className='bg-[#fff] flex sm:flex-row flex-col justify-center  items-center rounded-[8px] p-2 gap-10 '>
                <div className='text-white  p-3 items-center bg-[#5a56e9]  rounded-full'>
                <MdOutlineMarkEmailRead size={40} />

                    </div>
                <div className='flex flex-col  justify-between items-start'>
                   <h5 className='text-3xl font-semibold'>Email</h5> 
                    <p>info@umbrellapackaging.com</p>
                    </div>
                    </div>
                </div>
            
            <div className='grid grid-cols-1 '>
                <div className='bg-[#fff] flex sm:flex-row flex-col justify-center items-center  rounded-[8px] p-2 gap-5 '>
                <div className='text-white  p-3 items-center bg-[#5a56e9] rounded-full'>
                <IoLocationOutline size={40} />
                    </div>
                <div className='flex flex-col  justify-between items-start'>
                   <h5 className='text-3xl font-semibold'>Location</h5> 
                    <p>9854 National Blvd #1042, Los Angeles, CA 90034, United States</p>
                    </div>
                    </div>
                </div>
            
        </div>


        <div className='mt-5'>
        <iframe className='bg-[#f7f7f7] rounded-[8px] p-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.521941824463!2d-118.40357272390203!3d34.03048011887841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbbf80eec803%3A0x8425555061bf7fe8!2sUmbrella%20Custom%20Packaging%20USA!5e0!3m2!1sen!2s!4v1742941460574!5m2!1sen!2s" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        
        

    </div>
    </>
  )
}

export default ContactUs

