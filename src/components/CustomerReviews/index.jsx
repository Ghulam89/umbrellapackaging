
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BlogCard from "../common/BlogCard";
import Button from "../common/Button";
import review from '../../assets/images/review.png';
import { FaStar } from "react-icons/fa";
const CustomerReviews = () => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsAutoPlay(scrollPosition <= 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className="py-12  mt-10" style={{backgroundImage:`url(${review})`,backgroundPosition:'center',backgroundSize:'cover'}}>
      <div className=" sm:max-w-7xl max-w-[95%] mx-auto  text-center">
        <h2 className=" pb-3 font-semibold">Customer Reviews</h2>
        <p className=" text-sm pb-5 text-gray-500">Share your true experience with us by writing a review below</p>
        <Button label={'Write a Review'} className=" mx-auto bg-[#4440E6] mb-5 text-white" />
        <div className="w-full  mx-auto relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={
              isAutoPlay ? { delay: 3000, disableOnInteraction: false } : false
            }
            loop={true}
            // pagination={{ clickable: true }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={30}
           slidesPerView="auto"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1},
              1024: { slidesPerView:1},
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="  max-w-6xl mx-auto">
                   <ul className=" flex justify-center gap-1">
                    <li>
                    <FaStar size={20} color="#f0ad4e" />
                    </li>
                    <li>
                    <FaStar size={20} color="#f0ad4e" />
                    </li>
                    <li>
                    <FaStar size={20} color="#f0ad4e" />
                    </li>
                    <li>
                    <FaStar size={20} color="#f0ad4e" />
                    </li>
                    <li>
                    <FaStar size={20} color="#f0ad4e" />
                    </li>
                   </ul>
                   <p className=" py-3 text-lg text-gray-500">Chris was extremely helpful throughout the whole process of design and the quality was great. Overall an honest company and a great experience. Would definitely recommend to anyone.</p>
                   <h5 className=" font-semibold">Sara Zack</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          
          <div className="flex absolute top-0 z-40   w-full justify-between  gap-3 items-center">
            <button className="custom-prev w-12 h-12 bg-[#F6F6F6] text-[#4440E6]  hover:bg-[#4440E6] hover:text-white  rounded-xl flex items-center justify-center">
              <IoIosArrowBack  size={25}  />
            </button>
            <button className="custom-next w-12 h-12 bg-[#F6F6F6] text-[#4440E6]  hover:bg-[#4440E6] hover:text-white  rounded-xl flex items-center justify-center">
              <IoIosArrowForward size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
