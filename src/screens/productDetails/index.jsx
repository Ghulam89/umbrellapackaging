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
import axios from 'axios'
import { BaseUrl } from '../../utils/BaseUrl'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import DOMPurify from 'dompurify';
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/productSlice'
const ProductDetails = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
 
  const location = useLocation();
  const { productSlug } = location.state || {};
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  const [relatedProduct, setRelatedProduct] = useState([])
  const images = [
    "https://umbrellapackaging.com/wp-content/uploads/2024/07/Cardboard-Bags.webp",
    "https://umbrellapackaging.com/wp-content/uploads/2024/07/Cardboard-Bag.webp",
    "https://umbrellapackaging.com/wp-content/uploads/2024/07/Cardboard-Bags-1.webp",
  ];


  const navigate = useNavigate();

  const testimonials3 = [
    {
      id: 1,

      title:
        "Cardboard Chocolate Boxes",

      desc: "The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",

      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/cardboard-chocolate-boxes.webp",
    },
    {
      id: 2,

      title:
        "Chocolate Bomb Boxes",

      desc: "The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",

      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/chocolate-bomb-boxes.webp",
    },
    {
      id: 3,

      title:
        "Small Chocolate Boxes ",

      desc: "The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",

      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/Small-Chocolate-Boxes.webp",
    },
    {
      id: 4,
      title:
        "I am very happy to use this VPN,",
      desc: "The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
      image: "https://umbrellapackaging.com/wp-content/uploads/2024/04/auto-airspring-boxes.webp",
    },
    {
      id: 4,
      title:
        " I am very happy to use this VPN",
      desc: "The finish of printed materials makes a big difference, ...and it can turly affect how people see your ",
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
        ? product?.images?.length - 1
        : curr - 1
    );

  const next = () =>
    setCurr((curr) =>
      curr === product?.images?.length - 1
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
    const newIndex = (currentIndex - 1 + product?.images?.length) % product?.images?.length;
    setSelectedImage(product?.images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(product?.images[newIndex]);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);




  const [isLoading, setIsLoading] = useState(false);


  const initialFormState = {
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    boxStyle: "",
    length: "",
    width: "",
    depth: "",
    unit: "Inches",
    stock: "Stock",
    colors: "Colors",
    printingSides: "Inside",
    quantity: "",
    addOns: "",
    image: null,
    description: ""
  };

  const [formData, setFormData] = useState(initialFormState);

  const validate = () => {
    return (
      formData.boxStyle &&
      formData.length &&
      formData.width &&
      formData.depth &&
      formData.unit &&
      formData.stock &&
      formData.colors &&
      formData.printingSides &&
      formData.quantity
    );
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post(`${BaseUrl}/requestQuote/create`, formDataToSend);

      if (response.data.status === 'success') {
        toast.success(response.data.message)
        setIsLoading(false);

        setFormData(initialFormState);
      } else {
        toast.error(response.data.message)
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
      setIsLoading(false);
    }
  };


  const customBox = [
    {
      id: 1,

      title: "Description",
      content: <div className=' h-96  overflow-y-auto px-3 py-3 bg-white rounded-lg'>

        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product?.description) }}>

        </p>

      </div>,
    },
    {
      id: 2,
      title: "Faq's",
      content: <div className='  px-3 bg-white'>
        <FAQ />
      </div>
    },
    {
      id: 3,
      title: "Why Us",
      content: <div className=' bg-white rounded-lg py-4 px-3'>
        <CustomPackagingApart />
      </div>

    },
    {
      id: 4,
      title: "Specifications",
      content: <div className=' bg-white p-2 rounded-lg'>

        <table className=' table border border-gray-400 w-full'>

          <tbody className=''>
            <tr className=' bg-[#F2F2F2]  border-b border-gray-400'>
              <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Size</td>
              <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>All custom shapes and sizes

              </td>
            </tr>
            <tr className=''>
              <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Paper Stock</td>
              <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>14pt cardboard, 16pt cardboard, 18pt cardboard & 24pt cardboard, White SBS C1S C2S, Corrugated, Rigid, Kraft, Linen



              </td>
            </tr>
            <tr className=' bg-[#F2F2F2] border-t  border-b border-gray-400'>
              <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Printing</td>
              <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>Digital, Offset (PMS and CMYK ) and Screen Printing

              </td>
            </tr>
            <tr className='   border-b border-gray-400'>
              <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Options</td>
              <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>Matte, Glossy, Spot UV, Aqueous Coating and Embossing, Debossing



              </td>
            </tr>
            <tr className=' bg-[#F2F2F2] border-t  border-b border-gray-400'>
              <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Extras

              </td>
              <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>Flaps, Ribbons, thread handles, gold foiling, silver foiling

              </td>
            </tr>
            <tr className=' bg-[#F2F2F2] border-t  border-b border-gray-400'>
              <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Quantities

              </td>
              <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>Short run and Bulk orders are accepted

              </td>
            </tr>
            <tr className=' bg-[#F2F2F2] border-t  border-b border-gray-400'>
              <td className='    border-gray-400 pt-3 pb-5 border-r px-2  font-[600] text-sm'>Proofing



              </td>
              <td className=' text-gray-500 px-2  pt-3 pb-5 text-sm'>
                3D Digital Mockup, Physical Sampling(On Demand),

              </td>
            </tr>
            <tr className=' bg-[#F2F2F2] border-t  border-b border-gray-400'>
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
      content: <div className=' bg-white rounded-lg  p-3'>
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


  const fetchProducts = async () => {
    const response = await axios.get(`${BaseUrl}/products/get/${productSlug}`)
    setProduct(response?.data?.data)
  }

  const fetchRelatedProducts = async () => {
    const response = await axios.get(`${BaseUrl}/products/related-products/${productSlug}`)
    setRelatedProduct(response?.data?.data)
  }

  useEffect(() => {
    fetchProducts();
    fetchRelatedProducts();
  }, [])


   useEffect(() => {
    if (product?.metaTitle) {
      document.title = `${product.metaTitle}`;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = product.metaDescription 
        ? `${product.metaDescription}`
        : "";
    }
  
        let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = "keywords";
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = product.keywords 
        ? `${product.keywords}`
        : "";
  
        let metaRobots = document.querySelector('meta[name="robots"]');
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.name = "robots";
        document.head.appendChild(robots);
      }
      metaRobots.content = product.robots 
        ? `noindex, nofollow`
        : "noindex, nofollow";
  
       let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = "canonical";
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = product.canonicalUrl 
        ? `${product.canonicalUrl}`
        : window.location.href.split('?')[0]
    
    
  
  }, [product]);


  return (
    <>
      <section className='py-8'>
        <div className='lg:max-w-7xl max-w-[95%] bg-[#F7F7F7] rounded-lg p-2 flex lg:flex-row flex-col gap-4 mx-auto'>
          <div className='lg:w-6/12'>
            <div className=' pb-7 pt-3'>
              <p className=' flex gap-1'><h5 className=' font-light text-[#4440E6]'>Home </h5>/<h5 className=' font-light text-[#4440E6]'>{product?.brandId?.name} </h5>/<h5 className=' font-light text-[#4440E6]'>{product?.categoryId?.title} </h5>/<h5 className=' font-light '>{product?.name} </h5></p>
            </div>
            <div className='w-full'>
              <div className="overflow-hidden relative">
                <div
                  className="flex relative transition-transform ease-out duration-500"
                  style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                  {product?.images?.map((image, i) => (
                    <div key={i} className="flex-none w-full rounded-xl overflow-hidden h-full">
                      <img
                        onClick={() => openImageViewer(image, i)}
                        src={`${BaseUrl}/${image?.url}`}
                        alt=""
                        className="w-full cursor-pointer h-full object-cover"
                      />


                    </div>
                  ))}
                </div>

                <button
                  onClick={prev}
                  className="w-12 h-12 shadow rounded-full cursor-pointer absolute left-5 sm:top-56 top-40 flex justify-center items-center bg-white/80 text-gray-800 hover:bg-white"
                >
                  <TfiAngleLeft size={20} className="" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full absolute cursor-pointer right-5 sm:top-56 top-40 flex justify-center items-center shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                  <TfiAngleRight size={20} />
                </button>
              </div>

              <div className="flex flex-row pt-4 items-center justify-center gap-2">
                {product?.images?.map((image, i) => (
                  <div
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`
                                            transition-all w-28 rounded-xl h-28 overflow-hidden bg-white 
                                            ${curr === i ? "w-20 h-20 border-2 border-[#4440E6] border-dashed" : "bg-opacity-50"}
                                        `}
                  >
                    <img
                      src={`${BaseUrl}/${image?.url}`}
                      alt=""
                      className="w-full h-full object-center"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3.5 lg:w-6/12 w-full">
            <h2 className='pb-2'>{product?.name}</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="w-full">
                  <Input
                    label="Name"
                    star={"*"}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  />
                </div>

                <div className="w-full">
                  <Input
                    label="Email"
                    star={"*"}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  />
                </div>

                <div className="w-full">
                  <Input
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                  />
                </div>

                <div className="w-full">
                  <Input
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2  mt-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                <div className="w-full">
                  <Input
                    label="Box Style"
                    star={"*"}
                    name="boxStyle"
                    value={formData.boxStyle}
                    onChange={handleChange}
                    placeholder="Box Style"
                    className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  />
                </div>

                <div className="w-full">
                  <Input
                    label="Size (Length)"
                    star={"*"}
                    name="length"
                    value={formData.length}
                    onChange={handleChange}
                    placeholder="Length"
                    className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  />
                </div>

                <div className="w-full">
                  <Input
                    label="Size (Width)"
                    star={"*"}
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    placeholder="width"
                    className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  />
                </div>

                <div className="w-full">
                  <Input
                    label="Size (Depth)"
                    star={"*"}
                    name="depth"
                    value={formData.depth}
                    onChange={handleChange}
                    placeholder="Depth"
                    className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  />
                </div>

                <div className="w-full">

                  <label
                    htmlFor="Unit"
                    className="  pb-1 flex  text-[#333333] text-sm font-medium   text-textColor"
                  >
                    Unit
                    <h5 className=" text-red-600 m-0 pl-1">*</h5>
                  </label>
                  <select name="unit" value={formData.unit}
                    onChange={handleChange} className="w-full outline-none bg-lightGray   text-gray-500 placeholder:text-gray-400 placeholder:text-sm  border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  >
                    <option value={'Inches'}>Inches</option>
                    <option value={'mm'}>mm</option>
                    <option value={'cm'}>cm</option>
                  </select>
                </div>



                <div className="w-full">

                  <label
                    htmlFor="Stock"
                    className="  pb-1 flex  text-[#333333] text-sm font-medium   text-textColor"
                  >
                    Stock
                    <h5 className=" text-red-600 m-0 pl-1">*</h5>
                  </label>
                  <select name="stock" value={formData.stock}
                    onChange={handleChange} className="w-full border text-gray-500 border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  >
                    <option value={'Stock'}>Stock</option>
                    <option value={'12pt Cardboard'}>12pt Cardboard</option>
                    <option value={'14pt Cardboard'}>14pt Cardboard</option>
                    <option value={'16pt Cardboard'}>16pt Cardboard</option>
                    <option value={'18pt Cardboard'}>18pt Cardboard</option>
                    <option value={'20pt Cardboard'}>20pt Cardboard</option>
                    <option value={'22pt Cardboard'}>22pt Cardboard</option>
                    <option value={'24pt Cardboard'}>24pt Cardboard</option>
                    <option value={'White SBS C1S C25'}>White SBS C1S C25</option>
                    <option value={'Corrugated'}>Corrugated</option>
                    <option value={'Rigid'}>Rigid</option>
                    <option value={'Kraft'}>Kraft</option>
                    <option value={'Linen'}>Linen</option>
                  </select>
                </div>



                <div className="w-full">

                  <label
                    htmlFor="Colors"
                    className="  pb-1 flex  text-[#333333] text-sm font-medium   text-textColor"
                  >
                    Colors
                    <h5 className=" text-red-600 m-0 pl-1">*</h5>
                  </label>
                  <select name="colors" value={formData.colors}
                    onChange={handleChange} className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  >
                    <option value={'Colors'}>Colors</option>
                    <option value={'Plain (No Printing)'}>Plain (No Printing)</option>
                    <option value={'1 Color'}>1 Color</option>
                    <option value={'2 Color'}>2 Color</option>
                    <option value={'3 Color'}>3 Color</option>
                    <option value={'4 Color'}>4 Color</option>
                    <option value={'4/1 Color'}>4/1 Color</option>
                    <option value={'4/2 Color'}>4/1 Color</option>
                    <option value={'4/3 Color'}>4/1 Color</option>
                    <option value={'4/4 Color'}>4/1 Color</option>

                  </select>
                </div>



                <div className="w-full">

                  <label
                    htmlFor="Printing Sides"
                    className="  pb-1 flex  text-[#333333] text-sm font-medium   text-textColor"
                  >
                    Printing Sides
                    <h5 className=" text-red-600 m-0 pl-1">*</h5>
                  </label>
                  <select name="printingSides" value={formData.printingSides}
                    onChange={handleChange} className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  >
                    <option value={'Inside'}>Inside</option>
                    <option value={'Outside'}>Outside</option>
                    <option value={'2 Color'}>Both (Inside & Outside)</option>

                  </select>
                </div>


                <div className="w-full">
                  <Input
                    label="Quantity"
                    star={"*"}
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  />
                </div>



                <div className="w-full">

                  <label
                    htmlFor="Add-Ons"
                    className="  pb-1 flex  text-[#333333] text-sm font-medium   text-textColor"
                  >
                    Add-Ons
                    <h5 className=" text-red-600 m-0 pl-1">*</h5>
                  </label>
                  <select name="addOns" value={formData.addOns}
                    onChange={handleChange} className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    required
                  >
                    <option selected></option>
                    <option value={'Foiling'}>Foiling</option>
                    <option value={'Spot UV'}>Spot UV</option>
                    <option value={'Embossing'}>Embossing</option>
                    <option value={'Debossing'}>Debossing</option>
                    <option value={'handles'}>handles</option>
                    <option value={'Inserts'}>Inserts</option>
                    <option value={'Windows'}>Windows</option>

                  </select>
                </div>

                <div className="sm:col-span-5">
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
                  <Input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className="border w-full bg-white rounded-lg border-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#4440E6] file:text-white hover:file:bg-[#3a36c7]"
                    accept=".png,.pdf,.jpg,.jpeg,.webp"
                  />
                </div>

                <div className="col-span-5">
                  <label
                    htmlFor="description"
                    className="block pb-1.5 text-[#333333] text-sm md:text-base font-medium"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-[#333333] bg-white text-xs md:text-sm p-2.5 rounded-lg"
                    placeholder="Tell us the size / dimensions, material, finising, add-ons, and design preferences."

                  ></textarea>
                </div>
              </div>

              <div>
                <div className="w-full flex justify-end mt-2">

                  <Button
                    type="submit"
                    label={isLoading ? "Sending..." : "Request A Quote"}
                    disabled={!validate() || isLoading}
                    className={`bg-[#4440E6] w-full text-white py-2.5 px-4 rounded-lg hover:bg-[#3938b8] transition-colors ${!validate || isLoading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>


      <section>
        <div className=' sm:max-w-7xl bg-[#F7F7F7] p-3 rounded-xl mb-8 max-w-[95%] mx-auto'>
          <div className="my-10">
            <Tabs defaultTab={"Description"} tabs={customBox} />
          </div>
        </div>
      </section>

      <section className='  '>
        <div className=' sm:max-w-7xl max-w-[95%] bg-[#FFDEBF] rounded-lg mx-auto'>
          <div className="flex flex-col  px-4 py-3 rounded-lg lg:flex-row  gap-8 items-center">
            <div className="w-full  lg:w-1/2">
              <img
                src={`${BaseUrl}/${product?.bannerImage}`}
                alt="Custom packaging example"
                className="w-full h-auto rounded-xl shadow-md object-cover"
                loading="lazy"
              />

            </div>

            <div className='w-full lg:w-1/2 '>

              <div className=" pt-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {product?.bannerTitle}

                </h2>
                <div className=' overflow-y-auto h-56'>
                  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product?.bannerContent) }} className="text-sm leading-6 text-gray-700 mb-6">



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






      <div className=" sm:max-w-7xl max-w-[95%]  mt-5 py-4 bg-[#F7F7F7] rounded-lg  px-3 mx-auto">
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
                  <img src={feature.icon} alt='' className=' rounded-lg w-full' />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="my-8 md:my-12">
        <div className=" sm:max-w-7xl max-w-[95%] mx-auto">
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
                  <h5 className="text-center py-3 text-gray-800 font-medium">{product?.name}</h5>
                </div>

                {/* Size */}
                <div className="border border-gray-200 rounded-lg p-2 md:p-3 bg-white shadow-sm">
                  <button className="bg-[#5A56E9] hover:bg-[#4440E6] text-white w-full text-sm md:text-base font-medium py-2 px-3 rounded">
                    Size
                  </button>
                  <h5 className="text-center py-3 text-gray-800 font-medium">{product?.size}</h5>
                </div>

                {/* Price */}
                <div className="border border-gray-200 rounded-lg p-2 md:p-3 bg-white shadow-sm">
                  <button className="bg-[#5A56E9] hover:bg-[#4440E6] text-white w-full text-sm md:text-base font-medium py-2 px-3 rounded">
                    Price
                  </button>
                  <h5 className="text-center py-3 text-gray-800 font-medium">${product?.actualPrice}</h5>
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
                <button onClick={() => {
                  dispatch(
                    addToCart({
                      _id: product._id,
                      image: `${BaseUrl}/${product.images[0]}`,
                      title: product.name,
                      price: product.actualPrice,
                      description: product.description,
                      quantity: 1,
                    })
                  )
                  navigate('/cart')
                }} className="bg-[#4440E6] cursor-pointer hover:bg-[#3835C7] text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 shadow-md w-full sm:w-auto">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=' '>
        <CustomPackagingProduced />
      </section>

      <div className=" py-4">
        <Container fullWidth={false} className="">
          <div className="">
            <div>
              <h3 className="">RELATED PRODUCTS</h3>
            </div>
            <div className=' py-5'>
              <CardSlider item={relatedProduct?.relatedProducts} />
            </div>


          </div>
          <CardSlider testimonials={testimonials3} />
        </Container>
      </div>


      {isViewerOpen && selectedImage && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className='absolute top-4 right-4'>
            <button
              onClick={closeImageViewer}
              className=" text-white text-3xl cursor-pointer hover:text-gray-300"
            >
              &times;
            </button>


          </div>
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white text-3xl  cursor-pointer hover:text-gray-300 p-4"
          >
            &#10094;
          </button>

         
    <div className="max-w-4xl max-h-screen overflow-auto">
      <img
        src={`${BaseUrl}/${selectedImage.url}`} 
        alt={selectedImage.altText}
        className="max-w-full max-h-screen object-contain"
      />
    </div>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white text-3xl cursor-pointer hover:text-gray-300 p-4"
          >
            &#10095;
          </button>

          <div className="absolute bottom-4 text-white">
            {currentIndex + 1} / {product?.images.length}
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetails