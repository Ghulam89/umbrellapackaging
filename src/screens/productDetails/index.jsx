import React, { useEffect, useState } from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button'
import CustomPackagingProduced from '../../components/CustomPackagingProduced'
import Container from '../../components/common/Container'
import CardSlider from '../../components/common/CardSlider'
import Tabs from '../../components/common/Tabs'
import FAQ from '../../components/FAQ/FAQ'
import CustomPackagingApart from '../../components/CustomPackagingApart/CustomPackagingApart'

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

    const testimonials3 = [
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


    const features = [
      {
        name: 'Embossing',
        description: 'Raised designs that add a tactile dimension to your packaging',
        icon: 'https://umbrellapackaging.com/wp-content/uploads/2024/01/6-1.webp'
      },
      {
        name: 'Debossing',
        description: 'Recessed designs that create an elegant, subtle effect',
        icon: 'https://umbrellapackaging.com/wp-content/uploads/2024/01/7.webp'
      },
      {
        name: 'Foiling',
        description: 'Metallic finishes that add luxury and shine to your branding',
        icon: 'https://umbrellapackaging.com/wp-content/uploads/2024/01/1.webp'
      },
      {
        name: 'Spot UV',
        description: 'Glossy coatings that highlight specific areas for visual impact',
        icon: 'https://umbrellapackaging.com/wp-content/uploads/2024/01/3.webp'
      }
    ];

    const [curr, setCurr] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const prev = () =>
        setCurr((curr) =>
            curr === 0
                ? images.length - 1
                : curr - 1
        );

    const next = () =>
        setCurr((curr) =>
            curr === images.length - 1
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

    const openImageViewer = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        setIsViewerOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeImageViewer = () => {
        setIsViewerOpen(false);
        document.body.style.overflow = 'auto';
    };

    const goToPrevious = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    
    
    const customBox = [
      {
        id: 1,
      
        title: "Description",
        content:<div className=' h-96  overflow-y-auto px-3 py-3 bg-white rounded-lg'>
          <h2  className='  pb-2'>Custom Cardboard Jewelry Packaging Boxes</h2>
          <p>Custom cardboard jewelry boxes are special boxes made for holding products. These boxes fit the product perfectly. These can be made of luxury, corrugated, or rigid material depending upon the use and budget of the customer. You can customize them differently, such as adjusting their size, shape, design, and materials used. They help the customers to display their brand by putting their logo. It enhances the product’s appearance and makes them more attractive. Different designs, logos, and brand names on the cardboard jewelry boxes attract customers and encourage them to buy cardboard jewelry products.
          </p>

          <h2  className='  pb-2  pt-2'>Varieties of Custom Cardboard Jewelry Boxes Styles
          </h2>
          <p>Style diversification plays an important role in branding and customization. It enables you to find the perfect shape for your business considering both the promotion and protection of the product. You can pick your own desired shape and style from a wide range of varieties and customize it in the desired size and design. Custom cardboard jewelry boxes have various styles to match different preferences and needs. Here are some basic styles simplified for easy understanding:

          </p>
          <h2  className='  pb-2  pt-2'>Customized Cardboard Jewelry Boxes with Logo & Artwork Printing

          </h2>
          <p>Umbrella Custom Packaging offers different ways to make your custom printed cardboard jewelry packaging with logo and design look awesome! We use two main types of printing. Offset printing is great for big orders because it is fast, smooth, and cheaper. Digital printing is used for quicker and smaller orders. We also offer different add-ons like embossing, debossing, spot UV, gloss or matte lamination, aqueous coating, wax coating, and custom cardboard jewelry packaging to make the boxes look extra special. Embossing and debossing are phenomena in which the desired text is raised above the surface and engraved on the surface respectively. Spot UV makes the specific area of desire like logos shiny on a matte surface to enhance its look and feel. Foiling gives a metallic feel to the area where it’s applied from the rest of the surface and this is available in all colors. Moreover, these techniques make your custom cardboard jewelry packaging more impressive to the customers. Overall, we have many cool ways to make your customized cardboard jewelry packaging unique from different printing methods.



          </p>
        </div>,
      },
      {
        id: 2,
        title: "Faq's",
        content:<div className='  px-3 bg-white'>
          <FAQ/>
        </div>
      },
      {
        id: 3,
        title: "Why Us",
        content:<div className=' bg-white rounded-lg py-4 px-3'>
            <CustomPackagingApart/>
        </div>
        
      },
      {
        id: 4,
        title: "Specifications",
        content:<div className=' bg-white p-2 rounded-lg'>
    
 <table className=' table border border-gray-400 w-full'>
  
  <tbody className=''>
    <tr  className=' bg-[#F2F2F2]  border-b border-gray-400'>
      <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Size</td>
      <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>All custom shapes and sizes

</td>
    </tr>
    <tr  className=''>
      <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Paper Stock</td>
      <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>14pt cardboard, 16pt cardboard, 18pt cardboard & 24pt cardboard, White SBS C1S C2S, Corrugated, Rigid, Kraft, Linen



</td>
    </tr>
    <tr  className=' bg-[#F2F2F2] border-t  border-b border-gray-400'>
      <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Printing</td>
      <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>Digital, Offset (PMS and CMYK ) and Screen Printing

</td>
    </tr>
    <tr  className='   border-b border-gray-400'>
      <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Options</td>
      <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>Matte, Glossy, Spot UV, Aqueous Coating and Embossing, Debossing



</td>
    </tr>
    <tr  className=' bg-[#F2F2F2] border-t  border-b border-gray-400'>
      <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Extras

</td>
      <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>Flaps, Ribbons, thread handles, gold foiling, silver foiling

</td>
    </tr>
    <tr  className=' bg-[#F2F2F2] border-t  border-b border-gray-400'>
      <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Quantities

</td>
      <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>Short run and Bulk orders are accepted

</td>
    </tr>
    <tr  className=' bg-[#F2F2F2] border-t  border-b border-gray-400'>
      <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Proofing



</td>
      <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>	
      3D Digital Mockup, Physical Sampling(On Demand), 

</td>
    </tr>
    <tr  className=' bg-[#F2F2F2] border-t  border-b border-gray-400'>
      <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Turnaround Time





</td>
      <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>	
      6-7 days to print and dispatch, and 2-3 days for ground shipping



</td>
    </tr>
  </tbody>
 </table>
   
    
    </div>
      },
      {
        id: 4,
        title: "Delivery",
        content:<div className=' bg-white rounded-lg  p-3'>
          <h4>Experience fastest free delivery
          </h4>
          <p className=' pt'>We prioritize our customers’ convenience above all at Umbrella Custom Packaging. That’s why we’re happy to offer a wide range of payment options to suit your preferences. So, feel confident knowing that when you choose Umbrella Custom Packaging, paying for your orders is as effortless as possible.

</p>

<div className=' flex   flex-wrap   gap-2 justify-between pt-8'>
     <div className='  border border-gray-200 rounded-lg'>
      <img src='https://umbrellapackaging.com/wp-content/uploads/2024/01/4.svg' alt='' />
     </div>
     <div className='  border border-gray-200 rounded-lg'>
      <img src='https://umbrellapackaging.com/wp-content/uploads/2024/01/3.svg' alt='' />
     </div>
     <div className='  border border-gray-200 rounded-lg'>
      <img src='https://umbrellapackaging.com/wp-content/uploads/2024/01/2.svg' alt='' />
     </div>
     <div className='  border border-gray-200 rounded-lg'>
      <img src='https://umbrellapackaging.com/wp-content/uploads/2024/01/2.svg' alt='' />
     </div>
</div>




        </div>
       
      },
      {
          id: 4,
          title: "Reviews",
          
        }
    ];
  
 



    return (
        <>
            <section className='py-8'>
                <div className='lg:max-w-6xl max-w-[95%] bg-[#F7F7F7] rounded-lg p-2 flex lg:flex-row flex-col gap-4 mx-auto'>
                    <div className='lg:w-6/12'>
                        <div className='w-full'>
                            <div className="overflow-hidden relative">
                                <div
                                    className="flex relative transition-transform ease-out duration-500 h-[80vh]"
                                    style={{ transform: `translateX(-${curr * 100}%)` }}
                                >
                                    {images.map((image, i) => (
                                        <div key={i} className="flex-none w-full rounded-xl overflow-hidden h-full">
                                            <img
                                                onClick={() => openImageViewer(image, i)}
                                                src={image}
                                                alt=""
                                                className="w-full cursor-pointer h-full object-cover"
                                            />

                                            
                                        </div>
                                    ))}
                                </div>
                                 
                                <button
                                    onClick={prev}
                                    className="w-12 h-12 shadow rounded-full cursor-pointer absolute left-5 top-56 flex justify-center items-center bg-white/80 text-gray-800 hover:bg-white"
                                >
                                    <TfiAngleLeft size={20} className="" />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-12 h-12 rounded-full absolute cursor-pointer right-5 top-56 flex justify-center items-center shadow bg-white/80 text-gray-800 hover:bg-white"
                                >
                                    <TfiAngleRight size={20} />
                                </button>
                            </div>

                            <div className="flex flex-row pt-4 items-center justify-center gap-2">
                                {images.map((image, i) => (
                                    <div
                                        key={i}
                                        onClick={() => goToSlide(i)}
                                        className={`
                                            transition-all w-28 rounded-xl h-28 overflow-hidden bg-white 
                                            ${curr === i ? "w-20 h-20 border-2 border-[#4440E6] border-dashed" : "bg-opacity-50"}
                                        `}
                                    >
                                        <img
                                            src={image}
                                            alt=""
                                            className="w-full h-full object-center"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-3.5 lg:w-6/12 w-full">
                        <h3 className='pb-2'>Tuck Top Mailer Boxes</h3>
                        <form>
                            <div className='grid grid-cols-2 pb-2 gap-2'>
                                <div className="w-full">
                                    <Input
                                        label="Name"
                                        star={"*"}
                                        placeholder="Name"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Email"
                                        star={"*"}
                                        placeholder="Email"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Phone Number"
                                        star={"*"}
                                        placeholder="Phone Number"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Company Name"
                                        star={"*"}
                                        placeholder="Company Name"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2">
                                <div className="w-full">
                                    <Input
                                        label="Box Style"
                                        star={"*"}
                                        placeholder="Box Style"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Size (Length)"
                                        star={"*"}
                                        placeholder="Length"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Size (Width)"
                                        star={"*"}
                                        placeholder="width"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Size (Depth)"
                                        star={"*"}
                                        placeholder="Depth"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Unit"
                                        star={"*"}
                                        placeholder="Inches"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Stock"
                                        star={"*"}
                                        placeholder="Stock"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Colors"
                                        star={"*"}
                                        placeholder="Colors"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Printing Sides"
                                        star={"*"}
                                        placeholder="Inside"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Quantity"
                                        star={"*"}
                                        placeholder="Quantity"
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Add-Ons"
                                        star={"*"}
                                        placeholder=""
                                        className={"w-full border rounded-lg bg-white"}
                                    />
                                </div>
                                <div className="col-span-5">
                                    <label
                                        htmlFor="first_name"
                                        className="pb-1.5 text-[#333333] text-sm font-medium text-textColor"
                                    >
                                        Upload Your Design, Max Size 5MB
                                        <p className="flex gap-0.5 text-xs m-0 pl-1">Allowed File Types:<p className="font-semibold text-xs"> png, pdf, jpg, jpeg, webp</p></p>
                                    </label>
                                    <input placeholder="" className="p-2.5 bg-white rounded-lg text-sm mt-2" type="file" />
                                </div>
                                <div className="col-span-5">
                                    <label
                                        htmlFor="first_name"
                                        className="pb-1.5 flex text-sm font-medium text-textColor"
                                    >
                                        Message
                                        <h5 className="text-red-600 m-0 pl-1">*</h5>
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full p-1 border rounded-lg bg-white"
                                        placeholder="Tell us the size / dimensions, material, finising, add-ons, and design preferences."
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="w-full flex justify-end mt-2">
                                    <Button
                                        label="Request A Quote"
                                        className='w-full bg-[#4440E6] text-white'
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


            <section>
              <div className=' sm:max-w-6xl bg-[#F7F7F7] p-3 rounded-xl mb-8 max-w-[95%] mx-auto'>
              <div className="my-10">
        <Tabs defaultTab={"Rigid Boxes"} tabs={customBox} />
      </div>
              </div>
            </section>

            <section className='  '>
     <div className=' sm:max-w-6xl max-w-[95%] bg-[#FFDEBF] rounded-lg mx-auto'>
     <div className="flex flex-col  px-4 py-3 rounded-lg lg:flex-row  gap-8 items-center">
     <div className="w-full  lg:w-1/2">
              <img 
                src={'https://umbrellapackaging.com/wp-content/uploads/elementor/thumbs/Automobile-Tuck-End-Boxes-1-quletru2lc69o0mxgg7pjt5hxs58dhcts25ybbffz4.webp'} 
                alt="Custom packaging example" 
                className="w-full h-auto rounded-xl shadow-md object-cover"
                loading="lazy"
              />
            
            </div>
                    
                    <div className='w-full lg:w-1/2 '>
                    
                    <div className=" pt-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Why We Are Your Top Choice for Custom Automobile Tuck End Boxes?

                        </h2>
                       <div className=' overflow-y-auto h-56'>
                       <p className="text-sm leading-6 text-gray-700 mb-6">
                       Umbrella Custom Packaging is a place that is excellent and competitive at making personalized automobile box packaging. Whether you care about the environment, making your brand look the same all the time, or having a cool design, we can help make your custom automobile tuck end boxes special. We make people remember your brand.




                        </p>
                       <p className="text-sm leading-6 text-gray-700 mb-6">
                       Moreover, our automobile tuck end boxes are a complete blend of our expertise and the durable material we use which keep your items safe during shipping. With your stylish design and our sturdy build, we make great packaging when you send it to the customers. We are all about making sure your automobile tuck end box looks amazing. We are super focused on getting every little detail just right from start to finish. Moreover, you can count on us to create packaging that fascinates your customers and makes automobile tuck end boxes stand out! Trust Umbrella Custom Packaging to provide high-quality automobile tuck end boxes that meet your packaging needs and look great too!


                        </p>
                       </div>
                        
                     
                      </div>

                      <div className=" flex flex-wrap   mt-7 gap-2.5 items-center">
            <Button
            
              label={"Order Process"}
              className=" bg-[#4440E6] text-white"
            />
            
          </div>
                    </div>
                      
                    
           
                    </div>
     </div>
     </section>





     
     <div className=" sm:max-w-6xl max-w-[95%]  mt-5 py-4 bg-[#F7F7F7] rounded-lg  px-3 mx-auto">
      <div className="text-center mb-12">
        <h1 className="">
          Enhance Your Product Presentation with Our Special Packaging Features

        </h1>
      
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div 
            key={feature.name}
            className="bg-white"
          >
            <div className="text-center">
              <div>
                <img  src={feature.icon} alt='' className=' rounded-lg w-full' />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>

     <section className="my-8 md:my-12">
  <div className=" sm:max-w-6xl max-w-[95%] mx-auto">
    <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
      {/* Image Section */}
      <div className="w-full lg:w-3/12">
        <img 
          className="rounded-xl w-full h-auto object-cover shadow-md" 
          src="https://umbrellapackaging.com/wp-content/uploads/2024/04/AUTOMOBILE-TUCK-END-BOXES.webp" 
          alt="Automobile Tuck End Boxes" 
        />
      </div>
      
      {/* Content Section */}
      <div className="w-full lg:w-9/12">
        {/* Buy Now Button */}
        <button className="bg-black hover:bg-gray-800 transition-colors duration-300 w-full text-white text-xl md:text-2xl font-bold py-3 px-4 rounded-lg shadow-lg">
          Buy Now!
        </button>
        
        {/* Description */}
        <p className="text-center py-4 md:py-6 text-gray-700 text-sm md:text-base leading-relaxed">
          Please note that it is our standard packaging for Automobile Tuck End Boxes. 
          If you want to customize your packaging, please send a custom quote request above. 
          We will respond to you immediately.
        </p>
        
        {/* Product Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 w-full mb-4">
          {/* Product Name */}
          <div className="border border-gray-200 rounded-lg p-2 md:p-3 bg-white shadow-sm">
            <button className="bg-[#5A56E9] hover:bg-[#4440E6] text-white w-full text-sm md:text-base font-medium py-2 px-3 rounded">
              Product Name
            </button>
            <h5 className="text-center py-3 text-gray-800 font-medium">Automobile Tuck End Boxes</h5>
          </div>
          
          {/* Size */}
          <div className="border border-gray-200 rounded-lg p-2 md:p-3 bg-white shadow-sm">
            <button className="bg-[#5A56E9] hover:bg-[#4440E6] text-white w-full text-sm md:text-base font-medium py-2 px-3 rounded">
              Size
            </button>
            <h5 className="text-center py-3 text-gray-800 font-medium">8 x 6 x 3 inch</h5>
          </div>
          
          {/* Price */}
          <div className="border border-gray-200 rounded-lg p-2 md:p-3 bg-white shadow-sm">
            <button className="bg-[#5A56E9] hover:bg-[#4440E6] text-white w-full text-sm md:text-base font-medium py-2 px-3 rounded">
              Price
            </button>
            <h5 className="text-center py-3 text-gray-800 font-medium">$1.00</h5>
          </div>
        </div>
        
        {/* Quantity and Add to Cart */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
          <div className="flex items-center gap-2">
            <label htmlFor="quantity" className="text-gray-700 font-medium hidden sm:block">Qty:</label>
            <input 
              type="number" 
              id="quantity"
              min="1"
              defaultValue={1} 
              className="rounded-lg border-2 border-gray-300 focus:border-[#5A56E9] focus:ring-1 focus:ring-[#5A56E9] w-16 md:w-20 py-2 px-3 text-center" 
            />
          </div>
          <button className="bg-[#4440E6] hover:bg-[#3835C7] text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 shadow-md w-full sm:w-auto">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
     
     <section className=' my-5'>
      <CustomPackagingProduced/>
     </section>

     <div className="mt-6 py-4">
      <Container fullWidth={false} className="">
       <div className=" flex sm:flex-row flex-col gap-3 pt-5 justify-between items-center">
        <div>
            <h3 className="">RELATED PRODUCTS</h3>
        </div>
       <div>
     
       </div>


       </div>
       <CardSlider testimonials={testimonials3}  />
      </Container>
        </div>


            {isViewerOpen && selectedImage && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] bg-opacity-90 z-50 flex items-center justify-center p-4">
                 <div className='absolute top-4 right-4'>
                 <button
                        onClick={closeImageViewer}
                        className=" text-white text-3xl hover:text-gray-300"
                    >
                        &times;
                    </button>

                  
                 </div>

                    

                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 text-white text-3xl hover:text-gray-300 p-4"
                    >
                        &#10094;
                    </button>

                    <div className="max-w-4xl max-h-screen overflow-auto">
                        <img
                            src={selectedImage}
                            alt={`Gallery Image ${currentIndex + 1}`}
                            className="max-w-full max-h-screen object-contain"
                        />
                    </div>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 text-white text-3xl hover:text-gray-300 p-4"
                    >
                        &#10095;
                    </button>

                    <div className="absolute bottom-4 text-white">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductDetails