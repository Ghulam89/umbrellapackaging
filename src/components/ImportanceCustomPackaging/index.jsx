import React from 'react';
import video from '../../assets/images/thumbnail-for-umbrella.webp';
import { FaRegCirclePlay } from 'react-icons/fa6';

const ImportanceCustomPackaging = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className=' text-center sm:pb-6 pb-3'>
            <h1 className=' flex sm:flex-row flex-col justify-center gap-1'>What Is Custom Packaging? <h5 className=' text-3xl m-0 text-[#4440E6]'>A Complete Guide  </h5></h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 bg-gray-50 h-[430px] pt-4 overflow-y-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Importance of Custom Packaging
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Here is how custom printed packaging works, explained simply:
            </p>
            
            <p className="text-base text-gray-700 mb-6">
              Custom packaging is important because it helps keep products safe and makes them look good. 
              When businesses pack items in special boxes or bags that fit them just right, they prevent 
              damage during shipping.
            </p>
            
            <ul className="space-y-4">
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Protection of Products</h3>
                <p className="text-gray-700 text-sm">
                  Custom packaging helps keep products safe during shipping and handling. When businesses 
                  pack items in specially designed boxes or bags that fit them just right, they prevent damage.
                </p>
              </li>
              
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Branding</h3>
                <p className="text-gray-700 text-sm">
                  Custom packaging is very important in branding because it helps a product stand out and 
                  tells customers more about the brand. When packaging is designed specifically for a product, 
                  it reflects the brand's identity, values, and personality.
                </p>
              </li>
              
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Eye-Catching Design</h3>
                <p className="text-gray-700 text-sm">
                  Customized packaging printing allows companies to display their brand. A box with bright 
                  colors and a cool design can grab people's attention and make them want to buy the product.
                </p>
              </li>
              
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Eco-Friendly Options</h3>
                <p className="text-gray-700 text-sm">
                  Many companies now use eco-friendly materials for their packaging, which is better for 
                  the environment. This helps reduce waste and shows customers that the brand cares about 
                  the environment.
                </p>
              </li>
              
              <li className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Creating a Memorable Experience</h3>
                <p className="text-gray-700 text-sm">
                  Printed box packaging can make opening a product feel special. A beautifully designed box 
                  adds excitement and joy to the experience, which can make customers more likely to buy 
                  from the brand again.
                </p>
              </li>
            </ul>
          </div>
          
          {/* Image */}
         {/* Fixed version */}
<div className="w-full relative lg:w-1/2">
  <img 
    src={video} 
    alt="Custom packaging example" 
    className="w-full h-auto rounded-xl shadow-md object-cover"
    loading="lazy"
  />

  <div className='absolute border-[#FF931E] text-[#FF931E] p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 rounded-full cursor-pointer'>
    <svg width={60} className='fill-current' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path>
    </svg>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default ImportanceCustomPackaging;