import React, { useEffect, useState } from 'react'
import Button from '../../components/common/Button';
import CategoryCard from '../../components/common/CategoryCard';
import GetPriceQuote from '../../components/GetPriceQuote/GetPriceQuote';
import PackagingBanner from '../../components/common/PackagingBanner';
import CustomBoxMaterial from '../../components/CustomBoxMaterial/CustomBoxMaterial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import icon1 from '../../assets/images/icon/Free Design support.svg';
import icon2 from '../../assets/images/icon/Free Lamination.svg';
import buliding from '../../assets/images/banner2.jpg';
import image1 from '../../assets/images/category-image1.png';
import brand1 from '../../assets/images/brand/brand1.png';
import brand2 from '../../assets/images/brand/brand2.svg';
import brand3 from '../../assets/images/brand/brand3.svg';
import brand4 from '../../assets/images/brand/brand4.svg';
import brand5 from '../../assets/images/brand/brand5.png';
import axios from 'axios';
import { BaseUrl } from '../../utils/BaseUrl';
import { Link, useLocation, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
const CategoryProducts = () => {
  const location = useLocation();
  const { slug } = location.state || {};
  const [categoryData, setCategoryData] = useState({});

  const [products, setProducts] = useState([])

  const Data = [
    {
      id: 1,
      title: "Apparel and Fashion Boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/09/Custom-Apparel-And-Fashion-Boxes-250x179.webp",
    },
    {
      id: 2,
      title: "Bakery boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/04/Custom-Bakery-Boxes-2-250x179.webp",
    },
    {
      id: 3,
      title: "Candle Boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/04/Candle-Boxes-250x179.webp",
    },
    {
      id: 4,
      title: "Cardboard Boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/05/Cardboard-Boxes-250x179.webp",
    },
    {
      id: 5,
      title: "CBD Boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/04/cbd-boxes--250x179.webp",
    },
    {
      id: 6,
      title: " Chocolate Boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/04/cbd-boxes--250x179.webp",
    },
    {
      id: 7,
      title: "Apparel and Fashion Boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/09/Custom-Apparel-And-Fashion-Boxes-250x179.webp",
    },
    {
      id: 8,
      title: "Bakery boxes",
      image:
        "https://umbrellapackaging.com/wp-content/uploads/2024/04/Custom-Bakery-Boxes-2-250x179.webp",
    },
  ];

  const data2 = [
    {
      id: 1,
      icon: icon1,
      title: 'No Minimum Order Qty',
      description: 'Order as few as one custom unit to get started, with no minimum order quantity requirements.'

    },
    {
      id: 2,
      icon: icon2,
      title: 'Free Design',
      description: 'Avail professional design services without any added fees, ensuring your vision comes to life.'

    },
    {
      id: 3,
      icon: icon2,
      title: 'Quickest Turnaround',
      description: 'Avail professional design services without any added fees, ensuring your vision comes to life.'

    },
    {
      id: 3,
      icon: icon2,
      title: 'Cheapest Prices',
      description: 'Benefit from our regular discounted rates and get the best custom packaging at the lowest prices.'

    },
    {
      id: 4,
      icon: icon2,
      title: 'Fee Shipping',
      description: 'Enjoy free shipping services for stock and custom orders of packaging boxes at Umbrella Packaging.'

    },

    {
      id: 3,
      icon: icon2,
      title: 'Quickest Turnaround',
      description: 'Avail professional design services without any added fees, ensuring your vision comes to life.'

    },


  ]

  const fetchCategory = async (slug) => {
    const response = await axios.get(`${BaseUrl}/category/get/${slug}`)
    console.log(response);

    setCategoryData(response?.data?.data)

  }


  const fetchProduct = async (slug) => {
    const response = await axios.get(`${BaseUrl}/products/categoryProducts/${slug}`)
    console.log(response,'products====>>');

    setProducts(response?.data?.data)

  }


  useEffect(() => {


    if (slug) {
      fetchCategory(slug);
      fetchProduct(slug);
    }
  }, [slug])

  return (
    <>
      <div className=' bg-[#F7F7F7] py-6'>
        <div className=' sm:max-w-7xl max-w-[95%] mx-auto'>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Text Content */}

            <div className='w-full lg:w-1/2 '>
              <ul className=' flex gap-3'>
                <li className=' text-sm text-[#4440E6]'>
                  Home
                </li>
                <li className=' text-sm text-[#4440E6]'>
                  / {categoryData?.brandId?.name}
                </li>
                <li className=' text-sm'>
                  / {categoryData?.title}
                </li>
              </ul>
              <div className=" pt-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {categoryData?.subTitle}
                </h3>
                <div className=' overflow-y-auto h-56'>
                  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(categoryData?.description) }}
                    className="text-sm leading-6 text-gray-700 mb-6">

                  </p>
                </div>


              </div>

              <div className=" flex flex-wrap   mt-7 gap-2.5 items-center">
                <Button

                  label={"Get Instant Quote"}
                  className=" bg-[#4440E6] text-white"
                />
                <Button
                  label={"Get Custom Template"}
                  className="bg-[#4440E6] text-white"
                />
                <Button
                  label={"Order Sample Kit"}
                  className="bg-[#4440E6]  text-white"
                />
              </div>
            </div>

            {/* Image */}
            {/* Fixed version */}
            <div className="w-full  lg:w-1/2">
              <img
                src={`${BaseUrl}/${categoryData?.image}`}
                alt="Custom packaging example"
                className="w-full h-auto rounded-xl shadow-md object-cover"
                loading="lazy"
              />

            </div>
          </div>
        </div>
      </div>
      <div className='  py-6'>
        <div className=' sm:max-w-7xl max-w-[95%] mx-auto'>
          <div className=' py-12'>
            <h1 className=" text-[#333333] font-semibold text-center">
              Find a Variety of Automotive Boxes Below

            </h1>
            <p className="  pt-3 pb-5 text-sm text-center ">
              Following are the Automotive Boxes offered at Umbrella Custom Packaging.

            </p>

            <div className=" grid sm:grid-cols-4 grid-cols-2  space-x-4 space-y-3 mt-3.5 justify-between">

              {products?.map((item, index) => {
                return <div>
                  <Link  state={{ productSlug: item._id}} to={`/${item?.slug}`}>
                    <div className="">
                      <div className="  sm:h-64 h-44">
                        <img   src={`${BaseUrl}/${item?.images?.[0]?.url}`} alt={item?.images?.[0]?.altText} className=" w-full h-full  rounded-xl" />
                      </div>
                      <h6 className="  text-center  font-medium text-[#333333]  text-lg  py-5">{item?.name}</h6>
                    </div>
                  </Link>
                </div>
              })}

            </div>
            <div className=' flex justify-center'>
              <Button label={'Explore More'} className="bg-[#4440E6] text-white" />
            </div>
          </div>

          <GetPriceQuote />


          <div className=' '>
            <div className=' text-center'>
              <h1>Create Long-Lasting Brand Recognition by Having Perfectly Customizable Automotive Boxes
              </h1>
              <p className=' pt-3'>In a highly competing <b>Automotive products</b> market, customized Automotive box packaging helps businesses stand out. It allows them to display their personalized branding and identity. This packaging also increases product protection during shipping and allows businesses to deliver important information about their products. It creates a memorable unboxing experience, builds brand loyalty, and encourages repeat purchases. Considering these all aspects of custom packaging, here’s how Umbrella Custom Packaging can make your custom-printed Automotive packaging stand out in the industry.

              </p>
            </div>

            <div className=' flex sm:flex-row flex-col gap-5  mt-5 bg-[#EFF4FE] p-4 rounded-lg justify-between'>
              <div className=' sm:w-6/12 w-full'>
                <iframe width="100%" className=' rounded-lg' height="315" src={categoryData?.videoLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className=' sm:w-6/12 w-full'>
                <h1>{categoryData?.title} Video Guide</h1>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(categoryData.videoDescription) }} className=' pt-4 pb-3'>
                </p>
                <h4 className=' pt-2'>Contact Us</h4>
                <ul className=' leading-7'>
                  <li className=' flex gap-1 items-center'>
                    <svg width={15} aria-hidden="true" class="e-font-icon-svg e-fas-phone-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                    Dial: 747-247-0456
                  </li>
                  <li className=' flex gap-1 items-center'>
                    <svg width={15} aria-hidden="true" class="e-font-icon-svg e-fab-whatsapp" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                    WhatsApp :747-247-0456
                  </li>
                  <li className=' flex gap-1 items-center'>
                    <svg width={15} aria-hidden="true" class="e-font-icon-svg e-far-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                    Email :sales@umbrellapackaging.com
                  </li>

                  <li className=' flex gap-1 items-center'>
                    <svg width={15} aria-hidden="true" class="e-font-icon-svg e-fab-skype" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path></svg>
                    Skype :747-247-0456
                  </li>
                </ul>
              </div>
            </div>


            <div className="flex flex-col bg-[#F4ECFB] px-4 py-6  rounded-lg lg:flex-row mt-10 gap-8 items-center">
              {/* Text Content */}

              <div className='w-full lg:w-1/2 '>

                <div className=" pt-3">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {categoryData?.bannerTitleFirst}
                  </h1>
                  <div className=' overflow-y-auto h-56'>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(categoryData.bannerContentFirst) }} className="text-sm leading-6  mb-6">


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

              {/* Image */}
              {/* Fixed version */}
              <div className="w-full  lg:w-1/2">
                <img
                  src={`${BaseUrl}/${categoryData?.bannerImageFirst}`}
                  alt="Custom packaging example"
                  className="w-full h-auto rounded-xl shadow-md object-cover"
                  loading="lazy"
                />

              </div>
            </div>

          </div>



        </div>



        <div className="sm:max-w-7xl  my-6 bg-[#eff4fe] py-3 rounded-lg  max-w-[95%] mx-auto">
          <div className="text-center pb-3">
            <h1 className="text-[#333333] pb-3.5 font-semibold">
              Your Packaging Partner: What Sets Umbrella Custom Packaging Apart


            </h1>
            <p className=' pb-3'>Order your Automotive Boxes and experience the best ever customer service, high quality products with fastest lead time of 6-7 days
            </p>
            <div className='rounded-lg p-3 h-56 flex justify-center mx-3 items-center bg-white'>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                speed={2000}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                {data2?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="text-center">
                      <img src={item.icon} alt="" width={60} className=' mx-auto' />
                      <h5 className=" font-semibold">{item.title}</h5>
                      <p className=" m-0 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>


        <div className=' sm:max-w-7xl max-w-[95%] mx-auto'>
          <div className="flex flex-col bg-[#F4ECFB] px-4 py-6  rounded-lg lg:flex-row mt-10 gap-8 items-center">
            {/* Text Content */}

            <div className='w-full lg:w-1/2 '>

              <div className=" pt-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {categoryData?.bannerTitleSecond}
                </h1>
                <div className=' overflow-y-auto h-56'>
                  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(categoryData.bannerContentSecond) }} className="text-sm leading-6  mb-6">




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

            {/* Image */}
            {/* Fixed version */}
            <div className="w-full  lg:w-1/2">
              <img
                src={`${BaseUrl}/${categoryData?.bannerImageSecond}`}
                alt="Custom packaging example"
                className="w-full h-auto rounded-xl shadow-md object-cover"
                loading="lazy"
              />

            </div>
          </div>
        </div>


        <PackagingBanner title={'Order Kraft Packaging For Sustainable Future.'} subTitle={"Go Green with Umbrella Custom Packaging Go For Kraft Packaging"} bgImage="https://umbrellapackaging.com/wp-content/uploads/2024/01/f2.webp" />


        <div className=' sm:max-w-7xl max-w-[95%] mx-auto'>
          <div className="flex flex-col bg-[#F4ECFB] px-4 py-6  rounded-lg lg:flex-row mt-10 gap-8 items-center">
            {/* Image */}
            {/* Fixed version */}
            <div className="w-full  lg:w-1/2">
              <img
                src={`${BaseUrl}/${categoryData?.bannerImageThird}`}
                alt="Custom packaging example"
                className="w-full h-auto rounded-xl shadow-md object-cover"
                loading="lazy"
              />

            </div>
            {/* Text Content */}

            <div className='w-full lg:w-1/2 '>

              <div className=" pt-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {categoryData?.bannerTitleThird}
                </h1>
                <div className=' overflow-y-auto h-56'>
                  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(categoryData.bannerContentThird) }} className="text-sm leading-6  mb-6">




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


          </div>
        </div>



        <div className=' sm:max-w-7xl mt-3.5 max-w-[95%] mx-auto'>
          <div className="flex flex-col bg-[#F4ECFB] px-4 py-6  rounded-lg lg:flex-row mt-10 gap-8 items-center">

            {/* Text Content */}

            <div className='w-full lg:w-1/2 '>

              <div className=" pt-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {categoryData?.bannerTitleFourth}
                </h1>
                <div className=' overflow-y-auto h-56'>
                  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(categoryData.bannerContentFourth) }} className="text-sm leading-6  mb-6">




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

            {/* Image */}
            {/* Fixed version */}
            <div className="w-full  lg:w-1/2">
              <img
                src={`${BaseUrl}/${categoryData?.bannerImageFourth}`}
                alt="Custom packaging example"
                className="w-full h-auto rounded-xl shadow-md object-cover"
                loading="lazy"
              />

            </div>
          </div>
        </div>

      </div>


      <div className=' mb-5 flex  justify-between sm:flex-row flex-col gap-3 items-center px-3 py-5 sm:max-w-7xl max-w-[95%] bg-[#FFDEBF] rounded-lg mx-auto'>
        <div>
          <h3>Looking for the templates of custom boxes and packaging ?
          </h3>
          <p className=' py-2'>Get a quick template file from us, where you can put your design and save some good time.

          </p>
        </div>

        <div>
          <Button label={'Get Template'} className=" bg-[#4440E6] text-white" />
        </div>
      </div>

      <CustomBoxMaterial />


      <div className=' py-5' style={{ backgroundImage: `url(${buliding})` }}>
        <div className='  sm:max-w-7xl flex sm:flex-row flex-col items-center max-w-[95%] mx-auto'>
          <div className=' sm:w-6/12 w-full'>
            <div className=' rounded-xl px-4 py-4 bg-white'>

              <h1>Building Trust with Top <br /> Brands
              </h1>
              <p className=' pt-2'>Many companies choose Umbrella Custom Packaging for amazing, affordable, and memorable custom printed boxes and packaging. We work hard to make sure we give them the best advice and solutions for their needs, so they feel confident and happy working with us. It doesn’t matter how big or small your business is, we’ll work with you to make the perfect custom boxes you want. By building trust with top brands through our dedication, reliability, and exceptional service, we continue to solidify our reputation as a trusted partner in the packaging industry.

              </p>

              <ul className=' flex pb-4 mt-10 w-full gap-2'>
                <li className=' bg-white shadow-xl h-20 w-28  flex justify-center items-center rounded-xl'>
                  <img src={brand1} alt='' />
                </li>
                <li className=' bg-white shadow-xl h-20 w-28   flex justify-center items-center rounded-xl'>
                  <img src={brand2} className='  h-full' alt='' />
                </li>
                <li className=' bg-white shadow-xl h-20 w-28   flex justify-center items-center rounded-xl'>
                  <img src={brand3} className='h-full' alt='' />
                </li>
                <li className=' bg-white shadow-xl h-20 w-28   flex justify-center items-center rounded-xl'>
                  <img src={brand4} className='h-full' alt='' />
                </li>
                <li className=' bg-white shadow-xl h-20 w-28   flex justify-center items-center rounded-xl'>
                  <span><img src={brand5} alt='' /></span>
                </li>
              </ul>

            </div>
          </div>
          <div className=' sm:w-5/12 w-full'>
            <img src={image1} alt=''
            />
          </div>
        </div>

      </div>



    </>
  )
}

export default CategoryProducts