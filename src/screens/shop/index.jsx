import React from 'react'
import CustomPackagingProduced from '../../components/CustomPackagingProduced'
import Button from '../../components/common/Button'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/common/ProductCard'
import Input from '../../components/common/Input'

const Shop = () => {
    const data = [
        {
          id: 1,
          
          title:
            "Cardboard Chocolate Boxes",
    
            desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
          
          image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/cardboard-chocolate-boxes.webp",
        },
        {
          id: 2,
          
          title:
            "Chocolate Bomb Boxes",
    
            desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
          
          image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/chocolate-bomb-boxes.webp",
        },
        {
          id: 3,
          
          title:
            "Small Chocolate Boxes ",
    
            desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
          
          image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/Small-Chocolate-Boxes.webp",
        },
        {
          id: 4,
          title:
            "I am very happy to use this VPN,",
            desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
          image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/auto-airspring-boxes.webp",
        },
        {
            id: 4,
            title:
              " I am very happy to use this VPN",
              desc:"The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
            image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/auto-airspring-boxes.webp",
          }
      ];
  return (
    <>
    <div  className=' bg-[#F7F7F7] my-5 py-12'>
    <div className=' sm:max-w-6xl max-w-[95%] mx-auto text-center'>
        <h1>Discover Our Custom Packaging Variety</h1>
        <p className=' pt-2'>Check out all the different types of boxes we have at Umbrella Custom Packaging! We have special categories for boxes that you can customize just the way you like. You get to choose whether it’s the size, the material, or how it looks. So, have a look and pick the perfect box for you!
</p>
      </div>
    </div>

   <div>
   <div className=' sm:max-w-6xl max-w-[95%] mb-8 mx-auto'>
        <div className=' flex    sm:flex-row flex-col gap-5 justify-between w-full'>
           <div className=' sm:w-9/12 w-full
           '>
             <div className=' grid  md:grid-cols-3 gap-4 grid-cols-2'>
              {
                data?.map((item,index)=>{
                    return (
                        <div className="   bg-[#f7f7f7] p-2 rounded-xl max-w-6xl mx-auto">
<ProductCard data={item} />
                        </div>
                        
                    )
                })
              }
            </div>

            <Button label={' Load More'} className='   mx-auto bg-[#4440E6] text-white' />

           </div>

           <div className=' sm:w-3/12 w-full'>
             
             <div className=' rounded-xl sticky top-7 bg-[#F7F7F7] p-3'>
                <form>
                     <h2 className='  text-center text-black'>Get an Instant Quote</h2>
                    <div  className=' flex flex-col gap-2'>
                        <div>
                            <Input label={'Name'} className={' w-full border rounded-lg bg-white'} placeholder={'Name'} />
                        </div>
                        <div>
                            <Input label={'Email'} className={' w-full border rounded-lg bg-white'} placeholder={'Email'} />
                        </div>
                        <div>
                            <Input label={'Phone Number'} className={' w-full border rounded-lg bg-white'} placeholder={'Phone Number'} />
                        </div>
                        <div>
                        <label className="pb-1.5 flex  text-[#333333] text-sm font-medium   text-textColor" htmlFor="review">
                  Message:
                </label>
                <textarea
                  id="review"
                  rows={2}
                  placeholder="Please Share specific packaging details such as dimensions, materials, weight limits, and design preferences. We'll"
                  className="rounded-[8px] w-full border-[#333333] border bg-[#fff] p-3"
                ></textarea>
                        </div>
                        <div>
                        <label
                  htmlFor="design_upload"
                  className="block pb-1.5 text-[#333333] text-sm md:text-base font-medium"
                >
                  Upload Your Design, Max Size 5MB
                  <p className="flex flex-wrap gap-0.5 text-xs md:text-sm mt-1">
                    Allowed File Types:
                    <span className="font-semibold"> png, pdf, jpg, jpeg, webp</span>
                  </p>
                </label>
                <input 
                  id="design_upload"
                  className="w-full p-2.5 bg-white rounded-lg text-xs md:text-sm border border-[#333333] mt-2"
                  type="file" 
                />
                        </div>
                         <div>
                            <Button label={' Send'} className=' w-full  bg-[#4440E6] text-white' />
                        </div>
                        
                    </div>
                </form>
             </div>

           </div>


        </div>
    </div>
   </div>
    
    <div className=' bg-[#FFF1E4] mb-8'>
    <div className=' sm:max-w-6xl max-w-[95%]  mx-auto'>
     <div className="flex flex-col  px-4 py-6  rounded-lg lg:flex-row  gap-8 items-center">
    
                    
                    <div className='w-full lg:w-1/2 '>
                    
                    <div className=" pt-3">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Why Choice us
                        </h1>
                       <div className=' overflow-y-auto h-56'>
                       <p className="text-sm leading-6 text-gray-700 mb-6">
                       We are your packaging partner at , not simply a business. Our persistent dedication to excellence, sustainability, and achievement is what distinguishes us. Utilizing cutting-edge technology, a committed team of professionals, and curiosity for creativity, we go above and beyond to provide custom die-cut mylar bag packaging solutions that surpass your needs. You can rely on us to creatively and carefully display, preserve, and market your products. Contact our dedicated team at or email us at <Link to={''}>Sales@umbrellapackaging.com</Link> to get started.
                        </p>
                      
                       </div>
                        
                     
                      </div>

                      <div className=" flex flex-wrap   mt-7 gap-2.5 items-center">
            <Button
            
              label={"Get Instant Quote"}
              className=" bg-[#4440E6] text-white"
            />
            
          </div>
                    </div>

                    <div className="w-full  lg:w-1/2">
              <img 
                src={'https://umbrellapackaging.com/wp-content/uploads/2024/01/Industry-standard.png-2.webp'} 
                alt="Custom packaging example" 
                className="w-full h-auto rounded-xl shadow-md object-cover"
                loading="lazy"
              />
            
            </div>
                      
                    
           
                    </div>
     </div>
    </div>

    <div className='bg-[#F7F7F7] py-5 mb-8'>
    <CustomPackagingProduced/>
    </div>
    
    </>
  )
}

export default Shop