import React from 'react'
import BlogCard from '../../components/common/BlogCard'
import CustomPackagingProduced from '../../components/CustomPackagingProduced';

const Blogs = () => {
    const testimonials = [
        {
          id: 1,
          
          title:
            "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    
            desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
          
          image: "https://umbrellapackaging.com/wp-content/uploads/2025/01/Comparison-of-soft-touch-lamination-and-soft-touch-coating-highlighting-their-textures-and-finishes-for-enhanced-tactile-experience.webp",
        },
        {
          id: 2,
          
          title:
            "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    
            desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
          
          image: "https://umbrellapackaging.com/wp-content/uploads/2025/01/Comparison-of-soft-touch-lamination-and-soft-touch-coating-highlighting-their-textures-and-finishes-for-enhanced-tactile-experience.webp",
        },
        {
          id: 3,
          
          title:
            "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    
            desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
          
          image: "https://umbrellapackaging.com/wp-content/uploads/2025/01/Comparison-of-soft-touch-lamination-and-soft-touch-coating-highlighting-their-textures-and-finishes-for-enhanced-tactile-experience.webp",
        },
        {
          id: 4,
          title:
            "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
            desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
          image: "https://umbrellapackaging.com/wp-content/uploads/2025/01/Comparison-of-soft-touch-lamination-and-soft-touch-coating-highlighting-their-textures-and-finishes-for-enhanced-tactile-experience.webp",
        },
      ];

  return (
    <>
    
<div className="sm:max-w-6xl max-w-[95%] mx-auto px-4 py-8">
<div className='bg-[#2E2D2D] rounded-[8px] p-5 h-[230px] flex flex-col justify-center items-center space-y-5 mb-5'>
        <h5 className='md:text-[43px] flex gap-2 items-center text-[30px] text-white font-semibold leading-10 text-center'>Our
        <h5 className='md:text-[43px] text-[30px] text-[#ff931e]'> Blogs</h5></h5>
      


        </div>
    <div className=' grid grid-cols-3 gap-3'>
        {
            testimonials?.map((item,index)=>{
                return (
<BlogCard  data={item} />
                )
            })
        }
        <div>

            
        </div>
    </div>
</div>

<div className=' mb-4'> 
<CustomPackagingProduced/>
</div>
    </>
  )
}

export default Blogs