import React, { useEffect, useState } from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import { IoHomeOutline } from 'react-icons/io5'
import { LiaAngleRightSolid } from 'react-icons/lia'
const ProductDetails = ({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
}) => {

    const images = [
        "https://umbrellapackaging.com/wp-content/uploads/2024/07/Cardboard-Bags.webp",
        "https://umbrellapackaging.com/wp-content/uploads/2024/07/Cardboard-Bag.webp",
        "https://umbrellapackaging.com/wp-content/uploads/2024/07/Cardboard-Bags-1.webp",
      ];

    const [curr, setCurr] = useState(0);
    const prev = () =>
      setCurr((curr) =>
        curr === 0
          ? [
              images?.[0],
              images?.[1],
              images?.[2],
              images?.[0],
            ].length - 1
          : curr - 1
      );
    const next = () =>
      setCurr((curr) =>
        curr ===
        [
            images?.[0],
            images?.[1],
            images?.[2],
            images?.[0],
        ]?.length -
          1
          ? 0
          : curr + 1
      );
  
    useEffect(() => {
      if (!autoSlide) return;
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }, []);

    const goToSlide = (index) => {
        setCurr(index);
      };

   
    
  return (
    <>
     
     <section className='py-8'>
     <div className=' lg:max-w-6xl max-w-[95%]  bg-[#F7F7F7]  rounded-lg p-2  flex lg:flex-row flex-col gap-4 mx-auto'>
        <div className='  lg:w-6/12 '>
          
        <div className='w-full'>
        
        <div className="overflow-hidden relative">
            <div
              className="flex  relative transition-transform ease-out duration-500 h-[80vh]"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {[
                images[0],
                images?.[1],
                images?.[2],
                images?.[0],
              ]?.map((image, i) => {
                console.log(image, "slider image============>>>>>>>>>>>>>>");
                return (
                  <div key={i} className="flex-none w-full  rounded-xl overflow-hidden h-full">
                    <img
                    //   onClick={openSlider}
                      src={image}
                      alt=""
                      className="w-full cursor-pointer h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>

            <button
              onClick={prev}
              className=" w-12 h-12 shadow rounded-full cursor-pointer  absolute left-5 top-56 flex  justify-center items-center bg-white/80 text-gray-800 hover:bg-white"
            >
              <TfiAngleLeft size={20} className="" />
            </button>
            <button
              onClick={next}
              className=" w-12 h-12  rounded-full absolute cursor-pointer right-5 top-56 flex justify-center items-center shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <TfiAngleRight size={20} />
            </button>
            {/* </div> */}
          </div>

          
            <div className="flex flex-row pt-4 items-center justify-center gap-2">
              {[
                images?.[0],
                images?.[1],
                images?.[2],
                images?.[0],
              ]?.map((_, i) => (
                <div
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`
              transition-all w-28 rounded-xl  h-28  overflow-hidden bg-white 
              ${curr === i ? " w-20 h-20 border-2 border-[#F05367] border-dashed" : "bg-opacity-50"}
            `}
                >
                  <img
                    src={_}
                    alt=""
                    className=" w-full h-full   object-center  "
                  />
                </div>
              ))}
            </div>
         
        </div>
      
          
        </div>

        <div className="pt-3.5 lg:w-6/12 w-full">
            <h3 className=' pb-2'>Tuck Top Mailer Boxes
            </h3>
            <from>
              <div className=' grid grid-cols-2 pb-2 gap-2'>
              <div className=" w-full">
                  <Input
                    label="Name"
                    star={"*"}
                    placeholder="Name"
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Email"
                    star={"*"}
                    placeholder="Email"
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Phone Number"
                    star={"*"}
                    placeholder="Phone Number"
                    className={
                      "w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Company Name"
                    star={"*"}
                    placeholder="Company Name"
                    className={
                      "w-full border rounded-lg bg-white"
                    }
                  />
                </div>
            </div>  
              <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2">
              
                <div className=" w-full">
                  <Input
                    label="Box Style"
                    star={"*"}
                    placeholder="Box Style"
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Size (Length)"
                    star={"*"}
                    placeholder="Length"
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Size (Width)"
                    star={"*"}
                    placeholder="width"
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Size (Depth)"
                    star={"*"}
                    placeholder="Depth"
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Unit"
                    star={"*"}
                    placeholder="Inches"
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Stock"
                    star={"*"}
                    placeholder="Stock"
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Colors"
                    star={"*"}
                    placeholder="Colors"
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Printing Sides"
                    star={"*"}
                    placeholder="Inside"
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Quantity"
                    star={"*"}
                    placeholder="Quantity"
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" w-full">
                  <Input
                    label="Add-Ons"
                    star={"*"}
                    placeholder=""
                    className={
                      " w-full border rounded-lg bg-white"
                    }
                  />
                </div>
                <div className=" col-span-5">
                <label
                    htmlFor="first_name"
                    className="  pb-1.5   text-[#333333] text-sm font-medium   text-textColor"
                  >
                    Upload Your Design, Max Size 5MB
                    <p className=" flex gap-0.5   text-xs m-0 pl-1">Allowed File Types:<p className=" font-semibold text-xs"> png, pdf, jpg, jpeg, webp</p></p>
                  </label>
                  <input placeholder=""  className=" p-2.5 bg-white rounded-lg text-sm mt-2" type="file" />
                </div>
                <div className="col-span-5">
                  <label
                    htmlFor="first_name"
                    className="  pb-1.5 flex  text-sm font-medium   text-textColor"
                  >
                    Message
                    <h5 className=" text-red-600 m-0 pl-1">*</h5>
                  </label>
                  <textarea
                  rows={4}
                    className=" w-full p-1 border rounded-lg bg-white"
                    placeholder="Tell us the size / dimensions, material, finising, add-ons, and design preferences."
                  ></textarea>
                </div>
                
              </div>
              <div>
              <div className=" w-full  flex justify-end mt-2">
                <Button
                label="Request A Quote"
               className=' w-full  bg-[#4440E6] text-white'
              />
                </div>
              </div>
            </from>
          </div>
     </div>
     </section>
     
    </>
  )
}

export default ProductDetails